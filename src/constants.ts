
export const drawerWidth = 240;


export const TOKEN = process.env.REACT_APP_API_TOKEN;
export const DATA_LIFE_TIME = parseInt(process.env.REACT_APP_DATA_LIFE_TIME || "5000", 10);

if (!TOKEN || TOKEN === "") {
    throw Error("Need token to get weather data");
}