import {FormControl, FormControlLabel, FormLabel, Radio, RadioGroup} from "@material-ui/core";
import React, {useMemo} from "react";
import {useTranslation} from "react-i18next";

interface ITempSelectorProps {
    value: string;
    onChange: (celsius: string) => void;
}

const TempSelector = ({value, onChange}: ITempSelectorProps) => {
    const { t } = useTranslation();

    return (useMemo(() => (<FormControl component="fieldset" >
        <FormLabel component="legend">{t("tempUnit")} :</FormLabel>
        <RadioGroup aria-label={t("tempUnit")}
                    value={value}
                    onChange={(_, v) => onChange(v)}>
            <FormControlLabel value="f" control={<Radio />} label="Fahrenheit" />
            <FormControlLabel value="c" control={<Radio />} label="Celsius" />
        </RadioGroup>
    </FormControl>), [t, value, onChange]));
};

export default TempSelector;