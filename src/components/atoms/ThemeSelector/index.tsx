import {FormControlLabel, Switch} from "@material-ui/core";
import * as React from "react";
import {useTranslation} from "react-i18next";

interface IThemeSelectorProps {
    theme: string;
    onChange: (newTheme: string) => void;
}

const ThemeSelector = ({theme, onChange}: IThemeSelectorProps) => {
    const [t] = useTranslation();

    return (<FormControlLabel
        control={<Switch
            defaultChecked={theme !== "light"}
            inputProps={{ 'aria-label': 'checkbox with default color' }}
            onChange={(_, checked) => onChange(checked? "dark" : "light")}
        />}
        label={t("darkTheme")}
    />);
};

const propsAreEqual = (p: IThemeSelectorProps, n: IThemeSelectorProps) => p.theme === n.theme;

export default React.memo(ThemeSelector, propsAreEqual);
