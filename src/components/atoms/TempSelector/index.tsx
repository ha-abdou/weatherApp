import {FormControl} from "@material-ui/core";
import * as React from "react";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import FormLabel from "@material-ui/core/FormLabel";
import {useTranslation} from "react-i18next";

interface ITempSelector {
    value: "c" | "f";
    onChange: (celsius: string) => void;
}

const TempSelector = ({value, onChange}: ITempSelector) => {
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

export default TempSelector;