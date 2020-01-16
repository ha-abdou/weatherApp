import {AppBar, IconButton, makeStyles, Toolbar, Typography } from "@material-ui/core";
import {Menu} from '@material-ui/icons';
import React from 'react';
import { useTranslation } from 'react-i18next';
import {drawerWidth} from "../../../constants";

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

interface IAppBarProps {
    title: string;
    toggleDrawer: () => void;
}

const MyAppBar = ({ toggleDrawer, title}: IAppBarProps) => {
    const classes = useStyles();
    const { t } = useTranslation();

    return (<AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
        <IconButton
            color="inherit"
            aria-label={t("openDrawer")}
            edge="start"
            onClick={toggleDrawer}
            className={classes.menuButton}
        >
            <Menu />
        </IconButton>
        <Typography variant="h6" noWrap={true}>{title}</Typography>
        </Toolbar>
    </AppBar>);
};

const propsAreEqual = (p: IAppBarProps, n: IAppBarProps) => p.title === n.title;

export default React.memo(MyAppBar, propsAreEqual);
