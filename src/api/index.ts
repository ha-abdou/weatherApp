import axios, {AxiosError} from "axios";
import {TOKEN} from "../constants";
import CacheAPI from "./cache";

export interface IAPICityWeatherResponse {
    humidity: number,
    id: number,
    label: string,
    name: string,
    temp: number,
    temp_max: number,
    temp_min: number,
    weatherIcon: string,
    at: number,
}

export interface IAPICityForecastResponse {
    id: number;
    label: string;
    days: Array<{
        date: string,
        data: Array<{
            date: string;
            temp: number,
            humidity: number,
            weatherIcon: string,
            wind: {
                speed: number,
                deg: number,
            },
            at: string,
        }>
    }>;
    at: number;
}

export interface IAPIError {
    msg: string;
}

const API = {
    getCityForecast: async (label: string): Promise<IAPICityForecastResponse> => {
        try {
            const data = (await axios.get("https://api.openweathermap.org/data/2.5/forecast", {
                params: {
                    APPID: TOKEN,
                    q: label,
                }
            })).data;
            return (getCityForecastData(data))
        } catch (e) { throw handleError(e) }
    },
    getCityWeatherById: async (id: number): Promise<IAPICityWeatherResponse> => {
        try {
            const data = (await axios.get("https://api.openweathermap.org/data/2.5/weather", {
                params: { id, APPID: TOKEN }
            })).data;
            const weatherSummaryData = getCityData(data);

            CacheAPI.setCityWeatherSummary(weatherSummaryData);
            return (weatherSummaryData);
        } catch (e) { throw handleError(e) }
    },
    getCityWeatherByName: async (name: string): Promise<IAPICityWeatherResponse> => {
        try {
            const data = (await axios.get("https://api.openweathermap.org/data/2.5/weather", {
                params: {
                    APPID: TOKEN,
                    q: name,
                }
            })).data;
            const weatherSummaryData = getCityData(data);

            CacheAPI.setCityWeatherSummary(weatherSummaryData);
            return (weatherSummaryData);
        } catch (e) { throw handleError(e) }
    },
};

function handleError(e: AxiosError<{code: string, message: string}>) {
    if (e.response && e.response.data && e.response.data.message === "city not found") {
        // eslint-disable-next-line no-throw-literal
        return ({ msg: e.response.data.message });
    }
    // eslint-disable-next-line no-throw-literal
    return ({ msg: "error happen" });
}

// tslint:disable-next-line:no-any
function getCityData(data: any): IAPICityWeatherResponse {
    return ({
        at: Date.now(),
        humidity: data.main.humidity,
        id: data.id,
        label: `${data.name}, ${data.sys.country}`,
        name: data.name,
        temp: data.main.temp,
        temp_max: data.main.temp_max,
        temp_min: data.main.temp_min,
        weatherIcon: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
    });
}

// tslint:disable-next-line:no-any
function getCityForecastData(data: any): IAPICityForecastResponse {
    const days: IAPICityForecastResponse["days"] = [];

    // tslint:disable-next-line:no-any
    data.list.map((elm: any) => {
        const dt = elm.dt_txt.split(" ");
        const day: string = dt[0];
        const dayData: IAPICityForecastResponse["days"][0]["data"][0] = {
            at: `${dt[1].split(":")[0]}:00`,
            date: day,
            humidity: elm.main.humidity,
            temp: elm.main.temp,
            weatherIcon: `http://openweathermap.org/img/wn/${elm.weather[0].icon}@2x.png`,
            wind: {
                deg: elm.wind.deg,
                speed: elm.wind.speed,
            },
        };
        if (days.length === 0 || day !== days[days.length - 1].date) {
            days.push({
                data: [ dayData ],
                date: day,
            });
        } else {
            days[days.length - 1].data.push(dayData);
        }
        return elm;
    });
    return ({
        at: Date.now(),
        id: data.city.id,
        label: `${data.city.name}, ${data.city.country}`,
        // tslint:disable-next-line:object-literal-sort-keys object-shorthand-properties-first
        days
    });
}

export default API;