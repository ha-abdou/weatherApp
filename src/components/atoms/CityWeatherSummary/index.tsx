import {Card, CardContent, CardHeader, Divider, LinearProgress, makeStyles} from "@material-ui/core";
import React, {useMemo} from "react";
import {useTranslation} from "react-i18next";
import getIMG from "../../../images";

interface ICityWeatherSummaryProps {
    humidity: number,
    label: string,
    temp: number,
    temp_max: number,
    temp_min: number,
    weatherIcon: string,
    iconALT: string,
    updating?: boolean;
    onClick?: () => void;
}
const useStyles = makeStyles({
        divider: {
            marginBottom: 10,
            marginTop: 10
        },
        emptyDiv: {
            height: 4,
        },
        progress: {
            left: -16,
            top: -15,
            width: "120%",
        },
        root: {
            cursor: "pointer",
            display: "inline-block",
            margin: 5,
            padding: 15,
            width: 225,
        },
        tempHolder: {
            display: "flex",
        },
        tempSpan: {
            fontSize: 38,
            margin: "auto",
            marginLeft: 10
        },
        weatherIcon: {
            background: "#c7c7c7",
            borderRadius: 50,
            margin: "auto",
            marginTop: 7,
            width: 100,
        }});

const CityWeatherSummary = ({iconALT, humidity, label, onClick, temp, temp_max, temp_min, updating, weatherIcon}: ICityWeatherSummaryProps) => {
    const classes = useStyles();
    const { t } = useTranslation();

    return (useMemo(() => (<Card className={classes.root} onClick={onClick} >
        { updating ? <LinearProgress className={classes.progress} /> : <div className={classes.emptyDiv} /> }
        <CardHeader title={label} />
        <Divider />
        <CardContent className={classes.tempHolder}>
            <img className={classes.weatherIcon} src={getIMG(weatherIcon)} alt={t(iconALT)}/>
            <span className={classes.tempSpan}>{temp}°</span>
        </CardContent>
        <Divider className={classes.divider} />
        <div>
            <span style={{ float: "left" }}>{temp_max}°↑ {temp_min}°↓</span>
            <span style={{ float: "right"}}>{humidity}%</span>
        </div>
    </Card>), [classes, humidity, iconALT, label, onClick, t, temp, temp_max, temp_min, updating, weatherIcon]));
};

export default CityWeatherSummary;