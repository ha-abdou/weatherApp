import {useEffect, useState} from "react";
import API, {IAPICityWeatherResponse} from "../api";
import CacheAPI from "../api/cache";
import {DATA_LIFE_TIME, makeDummyCity} from "../constants";
import updateTemp from "../util/updateTemp";
import {ICityWeatherSummary} from "./useFavoriteCities";
import useInterval from "./useInterval";
import useSettings from "./useSettings";

const updateInterval = 1000;

const useCityLiveWeatherSummary = (label: string, onNotFound?: () => void) => {
    const { tempConverter } = useSettings();
    const [mounted, setMounted] = useState<boolean>(true);
    const [weather, setWeather] = useState<ICityWeatherSummary>(initState.bind(null, label, tempConverter));

    // update temp wen temp unit change
    useEffect(() =>  setWeather(initState(weather.label, tempConverter))
        , [tempConverter, weather.label]);
    // update data every updateInterval
    useInterval(() => {
        if (Date.now() - weather.at < DATA_LIFE_TIME) {
            return ;
        }
        setWeather({ ...weather, loading: true });
        API.getCityWeatherByName(weather.label)
            .then((w) => {
                if (mounted) {
                    setWeather(updateTemp({...w, loading: false}, tempConverter));
                }
            })
            .catch(() => {
                if (mounted) {
                    setWeather({ ...weather, loading: false });
                    // todo show error alert
                }
            });
    }, updateInterval);
    // after mount get data
    useEffect(() => {
        API.getCityWeatherByName(label)
            .then((ww) => {
                if (mounted) {
                    setWeather(updateTemp({ ...ww, loading: false }, tempConverter));
                }
            })
            .catch(onNotFound);
        return (() => setMounted(false));
    }, []);
    return { weather };
};

// init data
function initState(label: string, tempConverter: (t: number) => number): ICityWeatherSummary {
    const savedWeather: IAPICityWeatherResponse = CacheAPI.getCityWeatherSummary(label);

    if (!savedWeather) {
        return ({ ...makeDummyCity(), loading: true, label })
    }
    if (Date.now() - savedWeather.at > DATA_LIFE_TIME) {
        return updateTemp({ ...savedWeather, loading: true }, tempConverter);
    }
    return updateTemp({ ...savedWeather, loading: false }, tempConverter);
}

export default useCityLiveWeatherSummary;