import * as React from "react";
import Divider from "@material-ui/core/Divider";
import {makeStyles} from "@material-ui/core/styles";
import LanguagesSelector from "../LanguagesSelector";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ThemeSelector from "../ThemeSelector";

const useStyles = makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
}));

const DrawerContent = ({theme, setTheme}: any) => {
    const classes = useStyles();

    return (<div>
        <div className={classes.toolbar} />
        <Divider />
        <List>
            <ListItem>
                <LanguagesSelector />
            </ListItem>
            <Divider />
            <ListItem>
                <ThemeSelector theme={theme} onChange={setTheme}/>
            </ListItem>
            <Divider />
        </List>
    </div>);
};

export default DrawerContent;