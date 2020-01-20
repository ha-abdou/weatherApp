import {AppBar, IconButton, makeStyles, Toolbar, Typography } from "@material-ui/core";
import {Menu} from '@material-ui/icons';
import React from 'react';
import { useTranslation } from 'react-i18next';
import {drawerWidth} from "../../../constants";
import useSettings from "../../../hooks/useSettings/index";

const useStyles = makeStyles(theme => ({
    appBar: {
        [theme.breakpoints.up('md')]: {
            marginLeft: drawerWidth,
            width: `calc(100% - ${drawerWidth}px)`,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
}));

const MyAppBar = () => {
    const classes = useStyles();
    const { t } = useTranslation();
    const settings = useSettings();

    const handleDrawerToggle = () => {
        settings.setSetting("drawer", !settings.drawer);
    };

    return (<AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
        <IconButton
            color="inherit"
            aria-label={t("openDrawer")}
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
        >
            <Menu />
        </IconButton>
        <Typography variant="h6" noWrap={true}>{t("title")}</Typography>
        </Toolbar>
    </AppBar>);
};

export default React.memo(MyAppBar);
