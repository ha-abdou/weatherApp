import {FormControl} from "@material-ui/core";
import * as React from "react";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import FormLabel from "@material-ui/core/FormLabel";
import {useTranslation} from "react-i18next";

interface ISpeedUnitSelector {
    value: "km" | "ml";
    onChange: (celsius: string) => void;
}

const SpeedUnitSelector = ({value, onChange}: ISpeedUnitSelector) => {
    const { t } = useTranslation();

    return (<FormControl component="fieldset" >
        <FormLabel component="legend">{t("speedUnit")} :</FormLabel>
        <RadioGroup aria-label={t("speedUnit")}
                    value={value}
                    onChange={(_, v) => onChange(v)}>
            <FormControlLabel value="km" control={<Radio />} label={t("KPH")} />
            <FormControlLabel value="ml" control={<Radio />} label={t("MPH")} />
        </RadioGroup>
    </FormControl>);
};

export default SpeedUnitSelector;