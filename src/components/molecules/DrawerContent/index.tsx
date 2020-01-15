import * as React from "react";
import Divider from "@material-ui/core/Divider";
import {makeStyles} from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import LanguagesSelector from "../LanguagesSelector";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

const useStyles = makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
}));

const DrawerContent = () => {
    const classes = useStyles();

    return (<div>
        <div className={classes.toolbar} />
        <Divider />
        <List>
            <ListItem>
                <LanguagesSelector />
                <Divider />
            </ListItem>
            <ListItem>
                <Switch
                    defaultChecked
                    value="checkedF"
                    color="default"
                    inputProps={{ 'aria-label': 'checkbox with default color' }}
                />
            </ListItem>
        </List>
    </div>);
};

export default DrawerContent;