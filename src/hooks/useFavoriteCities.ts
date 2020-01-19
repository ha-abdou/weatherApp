import { useEffect, useState } from "react";
import {IAPICityWeatherResponse} from "../api";
import CacheAPI from "../api/cache";

export interface ICityWeatherSummary extends IAPICityWeatherResponse {
    loading: boolean;
}

const useFavoriteCities = () => {
    const [cities, setCities] = useState<string[]>(CacheAPI.getFavoriteCities());

    useEffect(() => CacheAPI.setFavoriteCities(cities), [cities]);
    return ({
        addCity: (city: string) => setCities([city, ...cities]),
        cities
    });
};

export default useFavoriteCities;
