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
    const [realLabel, setRealLabel] = useState<string|undefined>();
    const [redirectTo, setRedirect] = useState("");
    const classes = useStyles();

    return (useMemo(() => {
        const remove = () => {
            if (realLabel) {
                removeCity(realLabel);
                redirect();
            }
        };
        const onFound = (weather: ICityWeatherSummary) => {
            setRealLabel(weather.label);
        };
        const redirect = () => {
            setRedirect("/");
        };

        return (<div className={classes.root}>
            { redirectTo !== "" ? <Redirect to={redirectTo} /> : null }
            <div>
                <Button variant="contained" className={classes.floatLeft} onClick={redirect}>
                    <ArrowBackIosIcon />
                </Button>
                <Button className={classes.floatRight} variant="contained" color="secondary" onClick={remove}>
                    <DeleteForeverIcon />
                </Button>
            </div>
            <LiveWeatherSummary label={label.replace(/\+/g, " ")} onNotFound={redirect} onFound={onFound} />
            {realLabel ? <LiveCityForecast label={realLabel} /> : null }
        </div>);
    }, [classes.root, classes.floatLeft, classes.floatRight, redirectTo, label, realLabel, removeCity]));
};

export default CityWeather;