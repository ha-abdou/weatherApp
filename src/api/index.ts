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
}

interface IAPIErrorResponse {
    msg: string
}

const API = {
    getCityWeatherByName: async (name: string): Promise<IAPICityWeatherResponse> => {
        try {
            const res = (await axios.get("https://api.openweathermap.org/data/2.5/weather", {
                params: {
                    APPID: TOKEN,
                    q: name,
                }
            })).data;
            return ({
                humidity: res.main.humidity,
                id: res.id,
                label: `${res.name}, ${res.sys.county}`,
                name: res.name,
                temp: res.main.temp,
                temp_max: res.main.temp_max,
                temp_min: res.main.temp_min,
                weatherIcon: `http://openweathermap.org/img/wn/${res.weather.icon}@2x.png`,
            })
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

export default API;