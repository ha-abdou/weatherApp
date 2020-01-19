import React from "react";
import LiveWeatherSummary from "../../../molecules/LiveWeatherSummary";

interface ICityWeatherProps {
    label: string;
}

const CityWeather = ({ label }: ICityWeatherProps) => {

    return (<div style={{ maxWidth: 750, margin: "auto", textAlign: "center" }}>
        <LiveWeatherSummary label={label} onNotFound={() => { /*todo redirect*/}} />
    </div>)
};

export default CityWeather;
