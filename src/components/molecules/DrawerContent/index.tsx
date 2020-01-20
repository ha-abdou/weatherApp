import {Divider, List, ListItem, makeStyles} from "@material-ui/core";
import React, { useMemo } from "react";
import useSettings from "../../../hooks/useSettings/index";
import {languages} from "../../../i18n";
import LanguagesSelector from "../../atoms/LanguagesSelector";
import SpeedUnitSelector from "../../atoms/SpeedUnitSelector";
import TempSelector from "../../atoms/TempSelector";
import ThemeSelector from "../../atoms/ThemeSelector";

const useStyles = makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
}));

const DrawerContent = () => {
    const classes = useStyles();
    const { language, tempUnit, speedUnit, theme, setSetting } = useSettings();

    return (useMemo(() => (<div>
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
    </div>), [classes, language, setSetting, speedUnit, tempUnit, theme]));
};

export default DrawerContent;