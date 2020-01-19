import React from "react";
import useCityLiveWeatherSummary from "../../../hooks/useCityLiveWeatherSummary";
import CityWeatherSummary from "../../atoms/CityWeatherSummary";

interface ILiveWeatherSummaryProp {
    label: string;
    onNotFound?: () => void;
    onClick?: () => void;
}

const LiveWeatherSummary = ({label, onNotFound, onClick}: ILiveWeatherSummaryProp) => {
    const {weather} = useCityLiveWeatherSummary(label, onNotFound);

    return (<CityWeatherSummary humidity={weather.humidity}
                                label={weather.label}
                                temp={weather.temp}
                                temp_max={weather.temp_max}
                                temp_min={weather.temp_min}
                                weatherIcon={weather.weatherIcon}
                                updating={weather.loading}
                                onClick={onClick}
    />);
};

export default LiveWeatherSummary;