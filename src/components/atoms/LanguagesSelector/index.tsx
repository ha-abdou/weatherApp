import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import {FormControl} from "@material-ui/core";
import * as React from "react";
import {useTranslation} from "react-i18next";
import {languages} from "../../../i18n";

const LanguagesSelector = () => {
    const { t, i18n } = useTranslation();
    const changeLanguage = (_: React.ChangeEvent<HTMLInputElement>, lng: string) => {
        localStorage.setItem("i18nextLng", lng);
        i18n.changeLanguage(lng);
    };

    return (<FormControl component="fieldset" >
        <FormLabel component="legend">{t("languages")} :</FormLabel>
        <RadioGroup aria-label="gender" name="gender1" value={i18n.language} onChange={changeLanguage}>
            {languages.map(({name, code}) =>
                <FormControlLabel key={code} value={code} control={<Radio />} label={name} />)}
        </RadioGroup>
    </FormControl>);
};

export default LanguagesSelector;