import axios from "axios";
import {TOKEN} from "../constants";

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

const API = {
    getCityWeatherById: async (id: number): Promise<IAPICityWeatherResponse> => {
        try {
            const data = (await axios.get("https://api.openweathermap.org/data/2.5/weather", {
                params: { id, APPID: TOKEN }
            })).data;
            return (getCityData(data));
        } catch (e) {
            if (e.response && e.response.data && e.response.data.code === "400") {
                // can't use new Promise
                // eslint-disable-next-line no-throw-literal
                throw ({ msg: "fakeID" });
            }
            // can't use new Promise
            // eslint-disable-next-line no-throw-literal
            throw ({ msg: "error happen" });
        }
    },
    getCityWeatherByName: async (name: string): Promise<IAPICityWeatherResponse> => {
        try {
            const data = (await axios.get("https://api.openweathermap.org/data/2.5/weather", {
                params: {
                    APPID: TOKEN,
                    q: name,
                }
            })).data;
            return (getCityData(data))
        } catch (e) {
            if (e.response && e.response.data && e.response.data.message === "city not found") {
                // can't use new Promise
                // eslint-disable-next-line no-throw-literal
                throw ({ msg: e.response.data.message });
            }
            // can't use new Promise
            // eslint-disable-next-line no-throw-literal
            throw ({ msg: "error happen" });
        }
    }
};

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

export default API;