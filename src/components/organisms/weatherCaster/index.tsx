import React from "react";
import CityWeatherSummary from "../../atoms/CityWeatherSummary";
import SearchCity from "../../molecules/SearchCity";
const WeatherCaster = () => {

    return (<div>
        <SearchCity onFound={(res) => console.log(res)} />
        <CityWeatherSummary  humidity={0}
                             temp={188}
                             label={"Paris, FR"}
                             temp_max={20}
                             temp_min={10}
                             weatherIcon={"https://openweathermap.org/img/wn/10d@2x.png"}
                             onClick={() => { /**/ }}
                             updating={false}
        />
        <CityWeatherSummary  humidity={0}
                             temp={0}
                             label={"Paris, FR"}
                             temp_max={0}
                             temp_min={0}
                             weatherIcon={"https://openweathermap.org/img/wn/10d@2x.png"}
                             onClick={() => { /**/ }}
                             updating={true}
        />
    </div>);
};

export default WeatherCaster;
