import {ICityWeatherSummary} from "./hooks/useFavoriteCities";

export const drawerWidth = 240;


export const TOKEN = process.env.REACT_APP_API_TOKEN;
export const DATA_LIFE_TIME = parseInt(process.env.REACT_APP_DATA_LIFE_TIME || "5000", 10);
export function makeDummyCity(): ICityWeatherSummary {
    return({
        at: 0,
        humidity: 0,
        iconALT: "loading",
        id: 0,
        label: "",
        loading: true,
        name: "",
        temp: 0,
        temp_max: 0,
        temp_min: 0,
        weatherIcon: "/images/09d@2x.png",
    })
}
export const UPDATE_RATE = 1000;
if (!TOKEN || TOKEN === "") {
    throw Error("Need token to get weather data");
}