import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import MyDrawer from "./components/molecules/MyDrawer";
import MyAppBar from "./components/molecules/MyAppBar";

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

function App(props: any) {
    const classes = useStyles();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <MyAppBar title="Title" handleDrawerToggle={handleDrawerToggle} />
            <MyDrawer mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <h2>Content</h2>
            </main>
        </div>
    );
}

export default App;
