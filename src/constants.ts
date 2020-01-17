
export const drawerWidth = 240;


export const TOKEN = process.env.REACT_APP_API_TOKEN;

if (!TOKEN || TOKEN === "") {
    throw Error("Need token to get weather data");
}