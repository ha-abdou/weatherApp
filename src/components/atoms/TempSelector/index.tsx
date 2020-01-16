import {FormControl, FormControlLabel, FormLabel, Radio, RadioGroup} from "@material-ui/core";
import * as React from "react";
import {useTranslation} from "react-i18next";

interface ITempSelectorProps {
    value: string;
    onChange: (celsius: string) => void;
}

const TempSelector = ({value, onChange}: ITempSelectorProps) => {
    const { t } = useTranslation();

    return (<FormControl component="fieldset" >
        <FormLabel component="legend">{t("tempUnit")} :</FormLabel>
        <RadioGroup aria-label={t("tempUnit")}
                    value={value}
                    onChange={(_, v) => onChange(v)}>
            <FormControlLabel value="v" control={<Radio />} label="Fahrenheit" />
            <FormControlLabel value="c" control={<Radio />} label="Celsius" />
        </RadioGroup>
    </FormControl>);
};

const propsAreEqual = (p: ITempSelectorProps, n: ITempSelectorProps) => p.value === n.value;

export default React.memo(TempSelector, propsAreEqual);