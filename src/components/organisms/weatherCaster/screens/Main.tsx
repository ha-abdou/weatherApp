import React, {useState} from "react";
import {Redirect} from "react-router-dom";
import useFavoriteCities from "../../../../hooks/useFavoriteCities";
import LiveWeatherSummary from "../../../molecules/LiveWeatherSummary";
import SearchCity from "../../../molecules/SearchCity";


const WeatherCasterMainScreen = () => {
    const { cities, addCity } = useFavoriteCities();
    const [redirectTo, setRedirect] = useState("");

    const redirect = (label: string) => () => {
        setRedirect(label.replace(/ /g, "+"))
    };

    return (<div style={{ maxWidth: 750, margin: "auto", textAlign: "center" }}>
        { redirectTo !== "" ? <Redirect to={`/${redirectTo}`} /> : null }
        <SearchCity onFound={(city) => {
            window.focus();
            addCity(city.label);
        }} />
        {cities.map((city) =>
            <LiveWeatherSummary
                key={city}
                label={city}
                onClick={redirect(city)}
            />)}
    </div>);
};

export default WeatherCasterMainScreen;
