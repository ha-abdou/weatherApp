import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
import DrawerContent from "../DrawerContent";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    drawer: {
        [theme.breakpoints.up('md')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    drawerPaper: {
        width: drawerWidth,
    },
}));

const MyDrawer = ({handleDrawerToggle, mobileOpen}: any) => {
    const classes = useStyles();

    return (<nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden lgUp implementation="css">
            <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                classes={{
                    paper: classes.drawerPaper,
                }}
                ModalProps={{
                    keepMounted: true,
                }}
            >
                <DrawerContent />
            </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
            <Drawer
                classes={{
                    paper: classes.drawerPaper,
                }}
                variant="permanent"
                open
            >
                <DrawerContent />
            </Drawer>
        </Hidden>
    </nav>);
};

export default MyDrawer;
