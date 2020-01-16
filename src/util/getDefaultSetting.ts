import Cookies from "js-cookie";

const getDefaultSettings = () => ({
    language: Cookies.get("language") || "en",
    tempUnit: Cookies.get("tempUnit") || "c",
    speedUnit: Cookies.get("speedUnit") || "kmph",
    theme: Cookies.get("theme") || "light",
    drawer: false,
    setSetting: (key: string, value: string | number | boolean) => { /**/ },
});

export default getDefaultSettings;