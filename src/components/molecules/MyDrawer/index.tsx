import { Drawer, Hidden, makeStyles} from "@material-ui/core";
import React from "react";
import {drawerWidth} from "../../../constants";
import useSettings from "../../../hooks/useSettings";
import DrawerContent from "../DrawerContent";

const useStyles = makeStyles((theme) => ({
    drawer: {
        [theme.breakpoints.up('md')]: {
            flexShrink: 0,
            width: drawerWidth,
        },
    },
    drawerPaper: {
        width: drawerWidth,
    },
}));

const MyDrawer = () => {
    const classes = useStyles();
    const settings = useSettings();

    const handleDrawerToggle = () => {
        settings.setSetting("drawer", !settings.drawer);
    };

    return (<nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden lgUp={true} implementation="css">
            <Drawer variant="temporary"
                    open={settings.drawer}
                    onClose={handleDrawerToggle}
                    classes={{ paper: classes.drawerPaper }}
                    ModalProps={{ keepMounted: true }}
            >
                <DrawerContent />
            </Drawer>
        </Hidden>
        <Hidden smDown={true} implementation="css">
            <Drawer classes={{ paper: classes.drawerPaper }}
                    variant="permanent"
                    open={true}
            >
                <DrawerContent />
            </Drawer>
        </Hidden>
    </nav>);
};

export default MyDrawer;
