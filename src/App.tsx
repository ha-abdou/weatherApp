import { Button, CssBaseline, makeStyles, ThemeProvider } from '@material-ui/core';
import Cookies from "js-cookie";
import React from 'react';
import appReducer, {SET_SETTINGS, TOGGLE_DRAWER} from "./App.reducer";
import MyAppBar from "./components/atoms/MyAppBar";
import MyDrawer from "./components/molecules/MyDrawer";
import i18n from "./i18n";
import SettingsContext from "./settingsContext";
import {darkTheme, lightTheme} from "./themes";
import getDefaultSettings from "./util/getDefaultSetting";

const useStyles = makeStyles((theme) => ({
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    root: {
        display: 'flex',
    },
    toolbar: theme.mixins.toolbar,
}));
const defaultSettings = getDefaultSettings();

const App = () => {
    const classes = useStyles();
    const [state, dispatch] = React.useReducer(appReducer, defaultSettings);

    const handleDrawerToggle = () => {
        dispatch({type: TOGGLE_DRAWER});
    };
    defaultSettings.setSetting = (key: string, value: string | number | boolean) => {
        if (key === "language") {
            i18n.changeLanguage(value as string);
        }
        dispatch({
            payload: { key, value },
            type: SET_SETTINGS
        });
        Cookies.set(key, value.toString()); // todo review value type
    };

    return (<SettingsContext.Provider value={state}>
        <ThemeProvider theme={state.theme === "light" ? lightTheme : darkTheme }>
            <div className={classes.root}>
                <CssBaseline />
                <MyAppBar title="Title" toggleDrawer={handleDrawerToggle} />
                <MyDrawer isOpen={state.drawer} toggle={handleDrawerToggle} />
                <main className={classes.content}>
                    <div className={classes.toolbar} />
                    <Button onClick={() => defaultSettings.setSetting("tempUnit", state.tempUnit)}>d</Button>
                </main>
            </div>
        </ThemeProvider>
    </SettingsContext.Provider>);
};

export default App;
