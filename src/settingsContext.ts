import * as React from "react";
import getDefaultSettings from "./util/getDefaultSetting";

const SettingsContext = React.createContext(getDefaultSettings());

export default SettingsContext;