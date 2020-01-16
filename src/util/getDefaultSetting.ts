import Cookies from "js-cookie";

const getDefaultSettings = () => ({
    drawer: false,
    language: Cookies.get("language") || "en",
    setSetting: (key: string, value: string | number | boolean) => { /**/ },
    speedUnit: Cookies.get("speedUnit") || "kmph",
    tempUnit: Cookies.get("tempUnit") || "c",
    theme: Cookies.get("theme") || "light",
});

export default getDefaultSettings;