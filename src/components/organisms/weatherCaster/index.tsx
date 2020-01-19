import React from "react";
import {RouteComponentProps} from "react-router";
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";
import CityWeather from "./screens/CityWeather";
import WeatherCasterMainScreen from "./screens/Main";

const WeatherCaster = () => (<Router>
        <Switch>
            <Route path="/:cityLabel"
                   component={({match}: RouteComponentProps<{ cityLabel: string }>) =>
                       <CityWeather label={match.params.cityLabel}/>}
            />
            <Route path="/">
                <WeatherCasterMainScreen />
            </Route>
        </Switch>
    </Router>);


export default React.memo(WeatherCaster, () => true);
