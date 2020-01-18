import {Card, CardContent, CardHeader, createStyles, Divider, LinearProgress, makeStyles} from "@material-ui/core";
import React from "react";

interface ICityWeatherSummaryProps {
    humidity: number,
    label: string,
    temp: number,
    temp_max: number,
    temp_min: number,
    weatherIcon: string,
    updating?: boolean;
    onClick?: () => void;
}
const useStyles = makeStyles(() =>
    createStyles({
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
        }
    }),
);

const CityWeatherSummary = ({humidity, label, onClick, temp, temp_max, temp_min, updating, weatherIcon}: ICityWeatherSummaryProps) => {
    const classes = useStyles();

    return (<Card className={classes.root} onClick={onClick} >
        { updating ? <LinearProgress className={classes.progress} /> : <div className={classes.emptyDiv} /> }
        <CardHeader title={label} />
        <Divider />
        <CardContent className={classes.tempHolder}>
            <img className={classes.weatherIcon} src={weatherIcon} alt="todo"/>
            <span className={classes.tempSpan}>{temp}°</span>
        </CardContent>
        <Divider className={classes.divider} />
        <div>
            <span style={{ float: "left" }}>{temp_max}°↑ {temp_min}°↓</span>
            <span style={{ float: "right"}}>{humidity}%</span>
        </div>
    </Card>);
};

export default CityWeatherSummary;