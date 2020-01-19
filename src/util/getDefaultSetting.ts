import Cookies from "js-cookie";

const getDefaultSettings = () => ({
    drawer: false,
    language: Cookies.get("language") || "en",
    setSetting: (key: string, value: string | number | boolean) => { /**/ },
    speedUnit: Cookies.get("speedUnit") || "K/H",
    tempUnit: Cookies.get("tempUnit") || "c",
    theme: Cookies.get("theme") || "dark",
});

export default getDefaultSettings;