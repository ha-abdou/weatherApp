import {FormControl, FormControlLabel, FormLabel, Radio, RadioGroup} from "@material-ui/core";
import * as React from "react";
import {useTranslation} from "react-i18next";

interface ISpeedUnitSelectorProps {
    value: string;
    onChange: (celsius: string) => void;
}

const SpeedUnitSelector = ({value, onChange}: ISpeedUnitSelectorProps) => {
    const { t } = useTranslation();

    return (<FormControl component="fieldset" >
        <FormLabel component="legend">{t("speedUnit")} :</FormLabel>
        <RadioGroup aria-label={t("speedUnit")}
                    value={value}
                    onChange={(_, v) => onChange(v)}>
            <FormControlLabel value="kmph" control={<Radio />} label={t("KPH")} />
            <FormControlLabel value="mlpr" control={<Radio />} label={t("MPH")} />
        </RadioGroup>
    </FormControl>);
};

const propsAreEqual = (p: ISpeedUnitSelectorProps, n: ISpeedUnitSelectorProps) => p.value === n.value;

export default React.memo(SpeedUnitSelector, propsAreEqual);
