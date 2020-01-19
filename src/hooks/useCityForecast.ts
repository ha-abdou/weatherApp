import {useEffect, useState} from "react";
import API from "../api";
import {DATA_LIFE_TIME} from "../constants";
import {ICityWeatherSummary} from "./useFavoriteCities";


const useCityForecast = (label: string) => {
    const [cityWeather, setCityWaether] = useState<ICityWeatherSummary>(() => {
        const cities: ICityWeatherSummary[] = JSON.parse(localStorage.getItem("favoriteCities") || "[]");
        const city = cities.find((c) => c.label === label);

        if (!city) {
            return (makeDummyCity(label))
        }
        if (Date.now() - city.at > DATA_LIFE_TIME) {
            city.loading = true;
        }
        return (city);
    });
    const [fetchingCityWeather, setFetchingCityWeather] = useState<boolean>(false);
    
    
    useEffect(() => {
        if (cityWeather.loading && !fetchingCityWeather) {
            setFetchingCityWeather(true);
            API.getCityWeatherById(cityWeather.id)
                .then((data) => {
                    setFetchingCityWeather(false);
                    setCityWaether({
                        ...data,
                        loading: false,
                    })
                });
        }
    }, []);
    return ({
        cityWeather,
    });
};

export default useCityForecast;

function makeDummyCity(label: string): ICityWeatherSummary {
    return({
        at: 0,
        humidity: 0,
        id: 0,
        label,
        loading: true,
        name: "loading",
        temp: 0,
        temp_max: 0,
        temp_min: 0,
        weatherIcon: "string",
    })
}
