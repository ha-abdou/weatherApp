import {
    Card,
    CardContent,
    CardHeader,
    TextField,
} from "@material-ui/core";
import React from "react";
import SearchInput from "../../atoms/SearchInput";


const WeatherCaster = () => {

    return (<>
        <SearchInput style={{ maxWidth: "400px", margin: "auto", marginBottom: "10px"}}
                     value="s" onChange={() => {/**/}} onSearch={() => {/**/}} label="fdsd" />
        <Card>
            <CardHeader title={<TextField id="outlined-basic" label="Outlined" variant="outlined" />} />
            <CardContent> Content </CardContent>
        </Card>
    </>);
};

export default WeatherCaster;
