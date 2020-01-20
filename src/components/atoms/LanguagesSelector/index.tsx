import {FormControl, FormControlLabel, FormLabel, Radio, RadioGroup} from "@material-ui/core";
import React, {useMemo} from "react";
import {useTranslation} from "react-i18next";

interface ILanguagesSelectorProps {
    value: string;
    languages: Array<{name: string, code: string}>;
    onChange: (v: string) => void;
}

const LanguagesSelector = ({value,languages, onChange}: ILanguagesSelectorProps) => {
    const { t } = useTranslation();

    return (useMemo(() => (<FormControl component="fieldset" >
        <FormLabel component="legend">{t("languages")} :</FormLabel>
        <RadioGroup aria-label={t("languages")}
                    value={value}
                    onChange={(_, v) => onChange(v)}>
            {languages.map(({name, code}) =>
                <FormControlLabel key={code} value={code} control={<Radio />} label={name} />)}
        </RadioGroup>
    </FormControl>), [value, languages, t, onChange]));
};

export default LanguagesSelector;