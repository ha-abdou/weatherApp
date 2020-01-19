import {CssBaseline, makeStyles, ThemeProvider} from '@material-ui/core';
import Cookies from "js-cookie";
import {SnackbarProvider} from "notistack";
import React from 'react';
import appReducer, {SET_SETTINGS, TOGGLE_DRAWER} from "./App.reducer";
import MyAppBar from "./components/atoms/MyAppBar";
import MyDrawer from "./components/molecules/MyDrawer";
import WeatherCaster from "./components/organisms/weatherCaster";
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
        Cookies.set(key, value.toString());
    };

    return (<SettingsContext.Provider value={state}>
        <ThemeProvider theme={state.theme === "light" ? lightTheme : darkTheme }>
            <SnackbarProvider maxSnack={3}>
                <div className={classes.root}>
                    <CssBaseline />
                    <MyAppBar title="Title" toggleDrawer={handleDrawerToggle} />
                    <MyDrawer isOpen={state.drawer} toggle={handleDrawerToggle} />
                    <main className={classes.content}>
                        <div className={classes.toolbar} />
                        <WeatherCaster />
                    </main>
                </div>
            </SnackbarProvider>
        </ThemeProvider>
    </SettingsContext.Provider>);
};

export default App;
