import {FormControl, FormControlLabel, FormLabel, Radio, RadioGroup} from "@material-ui/core";
import React, { useMemo } from "react";
import {useTranslation} from "react-i18next";

interface ISpeedUnitSelectorProps {
    value: string;
    onChange: (celsius: string) => void;
}

const SpeedUnitSelector = ({value, onChange}: ISpeedUnitSelectorProps) => {
    const { t } = useTranslation();

    return (useMemo(() => (<FormControl component="fieldset" >
        <FormLabel component="legend">{t("speedUnit")} :</FormLabel>
        <RadioGroup aria-label={t("speedUnit")}
                    value={value}
                    onChange={(_, v) => onChange(v)}>
            <FormControlLabel value="K/H" control={<Radio />} label={t("KPH")} />
            <FormControlLabel value="M/H" control={<Radio />} label={t("MPH")} />
        </RadioGroup>
    </FormControl>), [t, value, onChange]));
};

export default SpeedUnitSelector;
