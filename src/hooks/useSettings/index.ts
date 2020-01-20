import {useContext} from "react";
import kelvinToFahrenheit from "../../util/kelvinToCelsius";
import kelvinToCelsius from "../../util/kelvinToFahrenheit";
import MSToKH from "../../util/MSToKH";
import MSToMH from "../../util/MSToMH";
import {SettingsContext} from "./provider";

const useSettings = () => {
    const settings = useContext(SettingsContext);

    return {
        ...settings,
        speedConverter: settings.speedUnit === "K/H" ? MSToKH : MSToMH,
        tempConverter: settings.tempUnit === "c" ? kelvinToCelsius : kelvinToFahrenheit
    }
};

export default useSettings;