import {ICityWeatherSummary} from "../hooks/useFavoriteCities";

function updateTemp (w: ICityWeatherSummary, tempConverter: (t: number) => number) {
    return ({
        ...w,
        temp: tempConverter(w.temp),
        temp_max: tempConverter(w.temp_max),
        temp_min: tempConverter(w.temp_min),
    });
}

export default updateTemp;
