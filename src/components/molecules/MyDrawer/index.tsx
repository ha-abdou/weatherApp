import { Drawer, Hidden, makeStyles} from "@material-ui/core";
import React from "react";
import {drawerWidth} from "../../../constants";
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

interface IMyDrawerProps {
    toggle: () => void;
    isOpen: boolean;
}

const MyDrawer = ({toggle, isOpen}: IMyDrawerProps) => {
    const classes = useStyles();

    return (<nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden lgUp={true} implementation="css">
            <Drawer variant="temporary"
                    open={isOpen}
                    onClose={toggle}
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
