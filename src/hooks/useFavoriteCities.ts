import { useState } from "react";
import CacheAPI from "../api/cache";

const useFavoriteCities = () => {
    const [cities, setCities] = useState<string[]>(CacheAPI.getFavoriteCities());
    const removeCity = (city: string) => {
        const index = cities.indexOf(city);

        if (index !== -1) {
            cities.splice(index, 1);
            setCities([ ...cities ]);
            CacheAPI.setFavoriteCities(cities);
        }
    };

    return ({
        addCity: (city: string) => {
            setCities([city, ...cities]);
            CacheAPI.setFavoriteCities(cities);
        },
        cities,
        removeCity,
    });
};

export default useFavoriteCities;
