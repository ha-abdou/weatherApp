import {useSnackbar} from "notistack";
import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import API, {IAPICityWeatherResponse} from "../api";
import CacheAPI from "../api/cache";
import {DATA_LIFE_TIME, makeDummyCity, UPDATE_RATE} from "../constants";
import updateTemp from "../util/updateTemp";
import useInterval from "./useInterval";
import useSettings from "./useSettings";

export interface ICityWeatherSummary extends IAPICityWeatherResponse {
    loading: boolean;
}

const useCityLiveWeatherSummary = (label: string, onNotFound?: () => void) => {
    const { tempConverter } = useSettings();
    const [mounted, setMounted] = useState<boolean>(true);
    const [weather, setWeather] = useState<ICityWeatherSummary>(initState.bind(null, label, tempConverter));
    const { t } = useTranslation();
    const {enqueueSnackbar} = useSnackbar();

    // update temp wen temp unit change
    useEffect(() =>  setWeather(initState(weather.label, tempConverter))
        , [tempConverter, weather.label]);
    // update data every updateInterval
    useInterval(() => {
        setWeather({ ...weather, loading: true });
        API.getCityWeatherByName(weather.label)
            .then((w) => {
                if (mounted) {
                    setWeather(updateTemp({...w, loading: false}, tempConverter));
                }
            })
            .catch((err) => {
                if (mounted) {
                    setWeather({ ...weather, loading: false });
                    enqueueSnackbar(t(err.msg), { variant: "error" });
                }
            });
    }, UPDATE_RATE);
    // after mount get data
    useEffect(() => {
        if (weather.loading) {
            API.getCityWeatherByName(label)
                .then((ww) => {
                    if (mounted) {
                        setWeather(updateTemp({ ...ww, loading: false }, tempConverter));
                    }
                })
                .catch((err) => {
                    // city not found
                    // no internet use keep using cache
                    if ((err.msg === "city not found" ||
                        (err.msg === "networkError" && weather.id === 0))
                        && onNotFound && mounted) {
                        onNotFound();
                    }
                });
        }
        return (() => setMounted(false));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return { weather };
};

// init data
function initState(label: string, tempConverter: (t: number) => number): ICityWeatherSummary {
    const savedWeather: IAPICityWeatherResponse = CacheAPI.getCityWeatherSummary(label);

    // no cache
    if (!savedWeather) {
        return ({ ...makeDummyCity(), loading: true, label })
    }
    // dead cache
    if (Date.now() - savedWeather.at > DATA_LIFE_TIME) {
        return updateTemp({ ...savedWeather, loading: true }, tempConverter);
    }
    // good cache
    return updateTemp({ ...savedWeather, loading: false }, tempConverter);
}

export default useCityLiveWeatherSummary;