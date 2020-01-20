import { Drawer, Hidden, makeStyles} from "@material-ui/core";
import React, {useMemo} from "react";
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
    const {setSetting, drawer} = useSettings();

    return (useMemo(() => {
        const handleDrawerToggle = () => {
            setSetting("drawer", !drawer);
        };

        return (<nav className={classes.drawer} aria-label="mailbox folders">
            <Hidden lgUp={true} implementation="css">
                <Drawer variant="temporary"
                        open={drawer}
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
    }, [classes, setSetting, drawer]));
};

export default MyDrawer;
