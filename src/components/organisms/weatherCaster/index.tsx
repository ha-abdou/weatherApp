import React from "react";
import {RouteComponentProps} from "react-router";
import { Route, Switch } from "react-router-dom";
import {PUBLIC_URL} from "../../../constants";
import CityWeather from "./screens/CityWeather";
import WeatherCasterMainScreen from "./screens/Main";

const WeatherCaster = () => (<Switch>
        <Route path={`${PUBLIC_URL}/:cityLabel`}
               component={({match}: RouteComponentProps<{ cityLabel: string }>) =>
                   <CityWeather label={match.params.cityLabel}/>}
        />
        <Route path={`${PUBLIC_URL}/`}>
            <WeatherCasterMainScreen />
        </Route>
    </Switch>);

export default React.memo(WeatherCaster, () => true);
