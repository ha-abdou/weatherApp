import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";
import WeatherCasterMainScreen from "./screens/Main";
import WeatherCasterOneCityScreen from "./screens/OneCity";

const WeatherCaster = () => {
    return (<Router>
        <Switch>
            <Route path="/:cityID" >
                <WeatherCasterOneCityScreen />
            </Route>
            <Route path="/">
                <WeatherCasterMainScreen />
            </Route>
        </Switch>
    </Router>);
};

export default WeatherCaster;
