import * as React from "react";
import Divider from "@material-ui/core/Divider";
import {makeStyles} from "@material-ui/core/styles";
import LanguagesSelector from "../../atoms/LanguagesSelector";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ThemeSelector from "../../atoms/ThemeSelector";
import TempSelector from "../../atoms/TempSelector";
import SpeedUnitSelector from "../../atoms/SpeedUnitSelector";

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
                <TempSelector value="c" onChange={() => {}}/>
            </ListItem>
            <Divider />
            <ListItem>
                <SpeedUnitSelector value="km" onChange={() => {}} />
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