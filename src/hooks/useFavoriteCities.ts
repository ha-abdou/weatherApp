import { useEffect, useState } from "react";
import {IAPICityWeatherResponse} from "../api";
import CacheAPI from "../api/cache";

// todo move it
export interface ICityWeatherSummary extends IAPICityWeatherResponse {
    loading: boolean;
}

const useFavoriteCities = () => {
    const [cities, setCities] = useState<string[]>(CacheAPI.getFavoriteCities());
    const removeCity = (city: string) => {
        const index = cities.indexOf(city);

        if (index !== -1) {
            cities.splice(index, 1);
            setCities([ ...cities ]);
        }
    };

    useEffect(() => CacheAPI.setFavoriteCities(cities), [cities]);
    return ({
        addCity: (city: string) => setCities([city, ...cities]),
        cities,
        removeCity,
    });
};

export default useFavoriteCities;
