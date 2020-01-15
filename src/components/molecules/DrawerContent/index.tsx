import * as React from "react";
import i18n from "../../../i18n";
import {withNamespaces} from "react-i18next";
import Divider from "@material-ui/core/Divider";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
}));

const DrawerContent = ({ t }: any) => {
    const classes = useStyles();
    const changeLanguage = (lng: string) => {
        localStorage.setItem("i18nextLng", lng);
        i18n.changeLanguage(lng);
    };

    return (<div>
        <div className={classes.toolbar} />
        <Divider />
        <h2>Drawer content</h2>
        <button onClick={() => changeLanguage('fr')}>fr</button>
        <button onClick={() => changeLanguage('en')}>en</button>
        <p>{t("hi")}</p>
    </div>);
};

export default withNamespaces()(DrawerContent);