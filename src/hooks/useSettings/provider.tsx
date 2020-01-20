import Cookies from "js-cookie";
import React, {useReducer, useState} from "react";
import i18n from "../../i18n";
import getDefaultSettings from "../../util/getDefaultSetting";
import settingsReducer, {SET_SETTINGS, ValueTypes} from "./reducer";

const defaultSettings = getDefaultSettings();

export const SettingsContext = React.createContext({
    ...getDefaultSettings(),
    setSetting: (key: string, value: ValueTypes) => { /**/ }
});

export const SettingsProvider: React.SFC = (props) => {
    const [state, dispatch] = useReducer(settingsReducer, defaultSettings);
    const [setSetting] = useState(() => (key: string, value: ValueTypes) => {
        if (key === "language") {
            i18n.changeLanguage(value as string);
        }
        dispatch({
            payload: {
                key,
                value
            },
            type: SET_SETTINGS,
        });
        Cookies.set(key, value.toString());
    });

    return (<SettingsContext.Provider value={{ ...state, setSetting }} >
        {props.children}
    </SettingsContext.Provider>);
};
