import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import {FormControl} from "@material-ui/core";
import * as React from "react";
import {useTranslation} from "react-i18next";

interface ILanguagesSelectorProps {
    value: string;
    languages: Array<{name: string, code: string}>;
    onChange: (v: string) => void;
}

const LanguagesSelector = ({value,languages, onChange}: ILanguagesSelectorProps) => {
    const { t } = useTranslation();

    return (<FormControl component="fieldset" >
        <FormLabel component="legend">{t("languages")} :</FormLabel>
        <RadioGroup aria-label={t("languages")}
                    value={value}
                    onChange={(_, v) => onChange(v)}>
            {languages.map(({name, code}) =>
                <FormControlLabel key={code} value={code} control={<Radio />} label={name} />)}
        </RadioGroup>
    </FormControl>);
};

const propsAreEqual = (p: ILanguagesSelectorProps, n: ILanguagesSelectorProps) => p.value === n.value;

export default React.memo(LanguagesSelector, propsAreEqual);