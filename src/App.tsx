import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import MyDrawer from "./components/molecules/MyDrawer";
import MyAppBar from "./components/atoms/MyAppBar";
import { ThemeProvider } from '@material-ui/styles';
import {lightTheme, darkTheme} from "./themes";
import Cookies from "js-cookie";
import SettingsContext from "./settingsContext";
import getDefaultSettings from "./util/getDefaultSetting";
import appReducer, {SET_SETTINGS, TOGGLE_DRAWER} from "./App.reducer";
import i18n from "./i18n";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
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
            type: SET_SETTINGS,
            payload: {
                key, value
            }
        });
        Cookies.set(key, value.toString()); // todo review value type
    };

    return (<SettingsContext.Provider value={state}>
        <ThemeProvider theme={state.theme === "light" ? lightTheme : darkTheme }>
            <div className={classes.root}>
                <CssBaseline />
                <MyAppBar title="Title" handleDrawerToggle={handleDrawerToggle} />
                <MyDrawer mobileOpen={state.drawer}
                          handleDrawerToggle={handleDrawerToggle}
                />
                <main className={classes.content}>
                    <div className={classes.toolbar} />
                    <h2>Content</h2>
                </main>
            </div>
        </ThemeProvider>
    </SettingsContext.Provider>);
};

export default App;
