import {IAPICityWeatherResponse} from "./index";

const CacheAPI = {
    getCityWeatherSummary: (label: string): IAPICityWeatherResponse =>
        JSON.parse(localStorage.getItem(`cache::WeatherSummary::${label}`) || "null"),
    getFavoriteCities: (): string[] =>
        JSON.parse(localStorage.getItem("cache::FavoriteCities") || "[\"Batman, TR\"]"),
    setCityWeatherSummary: (data: IAPICityWeatherResponse) =>
        localStorage.setItem(`cache::WeatherSummary::${data.label}`, JSON.stringify(data)),
    setFavoriteCities: (cities: string[]) =>
        localStorage.setItem("cache::FavoriteCities", JSON.stringify(cities)),
};

export default CacheAPI;
