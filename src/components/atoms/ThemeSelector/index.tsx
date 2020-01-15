import Switch from "@material-ui/core/Switch";
import * as React from "react";
import {FormControlLabel} from "@material-ui/core";
import {useTranslation} from "react-i18next";

interface IThemeSelectorProps {
    theme: "dark" | "light";
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

export default React.memo(ThemeSelector);
