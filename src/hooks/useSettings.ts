import {useContext} from "react";
import SettingsContext from "../settingsContext";
import kelvinToFahrenheit from "../util/kelvinToCelsius";
import kelvinToCelsius from "../util/kelvinToFahrenheit";
import MSToKH from "../util/MSToKH";
import MSToMH from "../util/MSToMH";

const useSettings = () => {
    const { tempUnit, theme, setSetting, speedUnit, language, drawer } = useContext(SettingsContext);

    return ({
        drawer,
        language,
        setSetting,
        speedConverter: speedUnit === "K/H" ? MSToKH : MSToMH,
        speedUnit,
        tempConverter: tempUnit === "c" ? kelvinToCelsius : kelvinToFahrenheit,
        tempUnit,
        theme
    });
};

export default useSettings;