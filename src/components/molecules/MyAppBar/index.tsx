import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from "@material-ui/core/AppBar";
import {drawerWidth} from "../../../constants";
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles(theme => ({
    appBar: {
        [theme.breakpoints.up('md')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
}));

function MyAppBar({ handleDrawerToggle, title}: any) {
    const classes = useStyles();
    const { t } = useTranslation();

    return (<AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
        <IconButton
            color="inherit"
            aria-label={t("openDrawer")}
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
        >
            <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap>{title}</Typography>
        </Toolbar>
    </AppBar>);
}

export default MyAppBar;
