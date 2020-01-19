import {useContext} from "react";
import SettingsContext from "../settingsContext";
import kelvinToFahrenheit from "../util/kelvinToCelsius";
import kelvinToCelsius from "../util/kelvinToFahrenheit";

const useSettings = () => {
    const { tempUnit, theme, setSetting, speedUnit, language, drawer } = useContext(SettingsContext);

    return ({
        drawer,
        language,
        setSetting,
        speedUnit,
        tempConverter: tempUnit === "c" ? kelvinToCelsius : kelvinToFahrenheit,
        tempUnit,
        theme
    });
};

export default useSettings;