import {Divider, List, ListItem, makeStyles} from "@material-ui/core";
import * as React from "react";
import {languages} from "../../../i18n";
import SettingsContext from "../../../settingsContext";
import LanguagesSelector from "../../atoms/LanguagesSelector";
import SpeedUnitSelector from "../../atoms/SpeedUnitSelector";
import TempSelector from "../../atoms/TempSelector";
import ThemeSelector from "../../atoms/ThemeSelector";

const useStyles = makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
}));

const DrawerContent = () => {
    const classes = useStyles();
    const { language, tempUnit, speedUnit, theme, setSetting } = React.useContext(SettingsContext);

    return (<div>
        <div className={classes.toolbar} />
        <Divider />
        <List>
            <ListItem>
                <LanguagesSelector value={language}
                                   languages={languages}
                                   onChange={(v) => setSetting("language", v)}
                />
            </ListItem>
            <Divider />
            <ListItem>
                <TempSelector value={tempUnit}
                              onChange={(v) => setSetting("tempUnit", v)}/>
            </ListItem>
            <Divider />
            <ListItem>
                <SpeedUnitSelector value={speedUnit}
                                   onChange={(v) => setSetting("speedUnit", v)} />
            </ListItem>
            <Divider />
            <ListItem>
                <ThemeSelector theme={theme} onChange={(v) => setSetting("theme", v)}/>
            </ListItem>
            <Divider />
        </List>
    </div>);
};

export default DrawerContent;