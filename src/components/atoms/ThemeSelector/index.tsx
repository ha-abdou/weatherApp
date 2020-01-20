import {FormControlLabel, Switch} from "@material-ui/core";
import React, {useMemo} from "react";
import {useTranslation} from "react-i18next";

interface IThemeSelectorProps {
    theme: string;
    onChange: (newTheme: string) => void;
}

const ThemeSelector = ({theme, onChange}: IThemeSelectorProps) => {
    const [t] = useTranslation();

    return (useMemo(() => (<FormControlLabel
        control={<Switch
            defaultChecked={theme !== "light"}
            inputProps={{ 'aria-label': t("darkTheme")}}
            onChange={(_, checked) => onChange(checked? "dark" : "light")}
        />}
        label={t("darkTheme")}
    />), [t, theme, onChange]));
};

export default ThemeSelector;
