import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import MyDrawer from "./components/molecules/MyDrawer";
import MyAppBar from "./components/atoms/MyAppBar";
import { ThemeProvider } from '@material-ui/styles';
import {lightTheme, darkTheme} from "./themes";
import Cookies from "js-cookie";

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

const App = () => {
    const classes = useStyles();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [theme, setTheme] = React.useState(Cookies.get("theme") || "light");

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (<ThemeProvider theme={theme === "light" ? lightTheme : darkTheme }>
        <div className={classes.root}>
            <CssBaseline />
            <MyAppBar title="Title" handleDrawerToggle={handleDrawerToggle} />
            <MyDrawer mobileOpen={mobileOpen}
                      handleDrawerToggle={handleDrawerToggle}
                      theme={theme}
                      setTheme={(newTheme: string) => {
                          setTheme(newTheme);
                          Cookies.set("theme", newTheme);
                      }}
            />
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <h2>Content</h2>
            </main>
        </div>
    </ThemeProvider>);
}

export default App;
