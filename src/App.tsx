import {CssBaseline, makeStyles, ThemeProvider} from '@material-ui/core';
import {SnackbarProvider} from "notistack";
import React from 'react';
import {Router} from "react-router-dom";
import MyAppBar from "./components/atoms/MyAppBar";
import MyDrawer from "./components/molecules/MyDrawer";
import WeatherCaster from "./components/organisms/weatherCaster";
import history from './history';
import useSettings from "./hooks/useSettings";
import {darkTheme, lightTheme} from "./themes";

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

const App = () => {
    const classes = useStyles();
    const settings = useSettings();

    return (<Router history={history}>
        <ThemeProvider theme={settings.theme === "light" ? lightTheme : darkTheme }>
            <SnackbarProvider maxSnack={3}>
                <div className={classes.root}>
                    <CssBaseline />
                    <MyAppBar />
                    <MyDrawer />
                    <main className={classes.content}>
                        <div className={classes.toolbar} />
                        <WeatherCaster />
                    </main>
                </div>
            </SnackbarProvider>
        </ThemeProvider>
    </Router>);
};

export default App;
