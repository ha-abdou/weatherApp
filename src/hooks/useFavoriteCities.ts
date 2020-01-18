import {useContext, useEffect, useState} from "react";
import API, {IAPICityWeatherResponse} from "../api";
import {DATA_LIFE_TIME} from "../constants";
import SettingsContext from "../settingsContext";
import kelvinToFahrenheit from "../util/kelvinToCelsius";
import kelvinToCelsius from "../util/kelvinToFahrenheit";
import useInterval from "./useInterval";

interface IFavoriteCities extends IAPICityWeatherResponse {
    loading: boolean;
}

const updateDT = 1000; // 60000 default

const useFavoriteCities = () => {
    const [cities, setCities] = useState<IFavoriteCities[]>(() => {
        const cts: IFavoriteCities[] = JSON.parse(localStorage.getItem("favoriteCities") || "[]");
        return (cts.map((c) => ({ ...c , loading: false})));
    });
    const { tempUnit } = useContext(SettingsContext);
    const tempConverter = tempUnit === "c" ? kelvinToCelsius : kelvinToFahrenheit;

    useEffect(() => localStorage.setItem("favoriteCities", JSON.stringify(cities)), [cities]);
    useInterval(() => checkDataValidity(cities, setCities), updateDT);
    return ({
        cities,
        tempConverter,
        // tslint:disable-next-line:object-literal-sort-keys
        addCity: (city: IAPICityWeatherResponse) => setCities(addCity(city, cities))
    });
};

function checkDataValidity (cities: IFavoriteCities[], setCities: (cities: IFavoriteCities[]) => void) {
    const newCities: IFavoriteCities[] = [ ...cities ];

    cities.map(async (city, index) => {
        if (!city.loading && Date.now() - city.at > DATA_LIFE_TIME) {
            newCities[index] = { ...newCities[index], loading: false };
            setCities(newCities);
            setCities(await updateCityData(index, city, cities));
        }
    });
}

async function updateCityData (index: number, city: IFavoriteCities, cities: IFavoriteCities[]): Promise<IFavoriteCities[]> {
    try {
        const newCity = await API.getCityWeatherById(city.id);
        const newCities = [ ...cities ];

        newCities[index] = { ...newCity, loading: false };
        return (newCities);
    } catch (e) {
        const newCities = [ ...cities ];

        newCities[index] = { ...city, loading: false };
        return (newCities);
    }
}

function addCity(city: IAPICityWeatherResponse, cities: IFavoriteCities[]): IFavoriteCities[] {
    if (cities.find((c) => c.id === city.id)) {
        return (cities);
    }
    cities.unshift({ ...city, loading: false });
    return([ ...cities ]);
}

export default useFavoriteCities;