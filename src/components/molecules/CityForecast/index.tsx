import {makeStyles, Table, TableBody, TableCell, TableHead, TableRow} from "@material-ui/core";
import React, {useMemo} from "react";
import {useTranslation} from "react-i18next";
import {IAPICityForecastResponse} from "../../../api";
import useSettings from "../../../hooks/useSettings";

interface ICityForecastProps {
    forecast: IAPICityForecastResponse["days"][0]["data"];
}

const useStyles = makeStyles(() => ({
    arrow: { display: "inline-block", fontSize: 20, marginLeft: 3 },
    weatherIcon: {width: 75, margin: "auto", background: "#c7c7c7" , marginTop: 7, borderRadius: 50}
}));

const CityForecast = ({forecast}: ICityForecastProps) => {
    const {speedUnit} = useSettings();
    const { t } = useTranslation();
    const classes = useStyles();

    return useMemo(() => (<Table aria-label={t("table forecast")}>
        <TableHead>
            <TableRow>
                <TableCell>{t("time")}</TableCell>
                <TableCell align="right">{t("temp")}</TableCell>
                <TableCell align="right">{t("sky")}</TableCell>
                <TableCell align="right">{t("humidity")}</TableCell>
                <TableCell align="right">{t("wind")}</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {forecast.map(row => (
                <TableRow key={row.date + row.at}>
                    <TableCell component="th" scope="row">{row.at}</TableCell>
                    <TableCell align="right">{row.temp}°</TableCell>
                    <TableCell align="right">
                        <img alt={row.iconALT}
                             className={classes.weatherIcon}
                             src={row.weatherIcon}
                        />
                    </TableCell>
                    <TableCell align="right">{row.humidity}%</TableCell>
                    <TableCell align="right">
                        {`${row.wind.speed} ${speedUnit} `}
                        <div className={classes.arrow} style={{transform: `rotate(${row.wind.deg + 180}deg)`}}>↑</div>
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>
    </Table>), [t, speedUnit, classes, forecast]);
};

export default CityForecast;
