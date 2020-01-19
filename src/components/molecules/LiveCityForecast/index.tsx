import {Card, Select} from "@material-ui/core";
import React, {useMemo} from "react";
import useCityForecast from "../../../hooks/useCityForecast";
import CityForecast from "../CityForecast";

interface ILiveCityForecastProps {
    label: string;
}

const LiveCityForecast = ({label}: ILiveCityForecastProps) => {
    const { forecast, days, setSelectedDay, selectedDay } = useCityForecast(label);

    return useMemo(() => (<Card>
        <Select
            native={true}
            value={selectedDay}
            onChange={(event) => setSelectedDay(event.target.value as string)}
            labelWidth={250}
        >
            {days.map((day) => <option key={day} value={day}>{day}</option>)}
        </Select>
        <CityForecast forecast={forecast} />
    </Card>), [selectedDay, days, forecast, setSelectedDay]);
};

export default LiveCityForecast;