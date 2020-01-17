import {Snackbar} from "@material-ui/core";
import {Alert as MuiAlert} from '@material-ui/lab';
import React from "react";
import {useTranslation} from "react-i18next";
import {IAPICityWeatherResponse} from "../../../api";
import useSearchCity from "../../../hooks/useSearchCity";
import SearchInput from "../../atoms/SearchInput";

interface ISearchCityProps {
    onFound: (res: IAPICityWeatherResponse) => void,
}

const SearchCity = ({onFound}: ISearchCityProps) => {
    const { loading, value, setValue, search, error } = useSearchCity(onFound);
    const { t } = useTranslation();

    return (<>
        <SearchInput onSearch={search}
                     onChange={setValue}
                     value={value}
                     loading={loading}
                     style={{ maxWidth: "400px", margin: "auto", marginBottom: "10px" }}
                     placeholder={t("searchCity")}
        />
        <Snackbar anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
                  open={error && error !== ""}
                  autoHideDuration={6000}
        >
            <MuiAlert elevation={6} variant="filled" severity="error">{t(error)}</MuiAlert>
        </Snackbar>
    </>);
};

export default SearchCity;