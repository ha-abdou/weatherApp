import React from "react";
import CityWeatherSummary from "../../atoms/CityWeatherSummary";
import SearchInput from "../../atoms/SearchInput";
const WeatherCaster = () => {

    return (<div>
        <SearchInput style={{ maxWidth: "400px", margin: "auto", marginBottom: "10px"}} loading={false}
                     value="s" onChange={() => {/**/}} onSearch={() => {/**/}} placeholder="fdsd" />
        <SearchInput style={{ maxWidth: "400px", margin: "auto", marginBottom: "10px"}} loading={true}
                     value="s" onChange={() => {/**/}} onSearch={() => {/**/}} placeholder="fdsd" />
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
