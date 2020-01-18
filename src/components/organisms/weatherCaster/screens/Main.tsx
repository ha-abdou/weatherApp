import React, {useState} from "react";
import {Redirect} from "react-router-dom";
import useFavoriteCities from "../../../../hooks/useFavoriteCities";
import CityWeatherSummary from "../../../atoms/CityWeatherSummary";
import SearchCity from "../../../molecules/SearchCity";

const WeatherCasterMainScreen = () => {
    const { cities, addCity, tempConverter } = useFavoriteCities();
    const [redirectTo, setRedirect] = useState(0);
    const redirect = (cityID: number) => () => {
        setRedirect(cityID)
    };

    return (<div style={{ maxWidth: 750, margin: "auto", textAlign: "center" }}>
        { redirectTo !== 0 ? <Redirect to={`/${redirectTo}`} /> : null }
        <SearchCity onFound={addCity} />
        {cities.map((city) =>
            <CityWeatherSummary  humidity={city.humidity}
                                 key={city.id}
                                 temp={tempConverter(city.temp)}
                                 label={city.label}
                                 temp_max={tempConverter(city.temp_max)}
                                 temp_min={tempConverter(city.temp_min)}
                                 weatherIcon={city.weatherIcon}
                                 onClick={redirect(city.id)}
                                 updating={city.loading}
            />)}
    </div>);
};

export default WeatherCasterMainScreen;
