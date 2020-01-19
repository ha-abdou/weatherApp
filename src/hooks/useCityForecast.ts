import {useEffect, useState} from "react";
import API, {IAPICityForecastResponse} from "../api";
import useSettings from "./useSettings";

const useCityForecast = (label: string) => {
    const [forecast, setForecast] = useState<IAPICityForecastResponse["days"][0]["data"]>([]);
    const [days, setDays] = useState<string[]>([]);
    const [forecastData, setForecastData] = useState<IAPICityForecastResponse|undefined>();
    const [selectedDay, setSelectedDay] = useState<string|undefined>();
    const { tempConverter, speedConverter } = useSettings();

    // update wen day are selected
    useEffect(() => {
        if (!forecastData || !selectedDay) {
            return;
        }
        forecastData.days.find((day) => {
            if (day.date !== selectedDay) {
                return false
            }
            setForecast(day.data.map((elm) => ({
                ...elm,
                temp: tempConverter(elm.temp),
                wind: {
                    ...elm.wind,
                    speed: speedConverter(elm.wind.speed),
                }
            })));
            return true;
        })
    }, [selectedDay, tempConverter, speedConverter, forecastData]);

    useEffect(() => {
        API.getCityForecast(label)
            .then((data) => {
                setForecastData(data);
                setDays(data.days.map((day) => day.date));
                setSelectedDay(data.days[0].date);
            })
            .catch(() => {
                // todo error
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return ({
        days,
        forecast,
        selectedDay,
        setSelectedDay
    });
};

export default useCityForecast;
