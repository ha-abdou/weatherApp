import {Button, makeStyles} from "@material-ui/core";
import {ArrowBackIos as ArrowBackIosIcon, DeleteForever as DeleteForeverIcon} from '@material-ui/icons';
import React, {useMemo, useState} from "react";
import {Redirect} from "react-router-dom";
import useFavoriteCities, {ICityWeatherSummary} from "../../../../hooks/useFavoriteCities";
import LiveCityForecast from "../../../molecules/LiveCityForecast";
import LiveWeatherSummary from "../../../molecules/LiveWeatherSummary";

interface ICityWeatherProps {
    label: string;
}

const useStyles = makeStyles({
    floatLeft: { float: "left"},
    floatRight: { float: "right"},
    root: { maxWidth: 750, margin: "auto", textAlign: "center" },
});

const CityWeather = ({ label }: ICityWeatherProps) => {
    const { removeCity } = useFavoriteCities();
    const [realLabel, setRealLabel] = useState(label.replace(/\+/g, " "));
    const [redirectTo, setRedirect] = useState("");
    const classes = useStyles();
    const redirect = () => {
        setRedirect("/");
    };
    const remove = () => {
        removeCity(realLabel);
        redirect();
    };
    const onFound = (weather: ICityWeatherSummary) => {
        if (realLabel !== weather.label) {
            setRealLabel(weather.label)
        }
    };

    return (useMemo(() => (<div className={classes.root}>
        { redirectTo !== "" ? <Redirect to={redirectTo} /> : null }
        <div>
            <Button variant="contained" className={classes.floatLeft} onClick={redirect}>
                <ArrowBackIosIcon />
            </Button>
            <Button className={classes.floatRight} variant="contained" color="secondary" onClick={remove}>
                <DeleteForeverIcon />
            </Button>
        </div>
        <LiveWeatherSummary label={realLabel} onNotFound={redirect} onFound={onFound} />
        <LiveCityForecast label={label} />
    </div>), // eslint-disable-next-line react-hooks/exhaustive-deps
        [label, classes, realLabel, redirectTo]));
};

export default CityWeather;
