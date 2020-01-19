import {useSnackbar} from "notistack";
import React, {useEffect} from "react";
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
    const {enqueueSnackbar} = useSnackbar();

    useEffect(() => {
        if (error && error !== "") {
            enqueueSnackbar(t(error), { variant: "error" });
        }

    }, [error, enqueueSnackbar, t]);
    return (<>
        <SearchInput onSearch={search}
                     onChange={setValue}
                     value={value}
                     loading={loading}
                     style={{ maxWidth: "400px", margin: "auto", marginBottom: "10px" }}
                     placeholder={t("searchCity")}
        />
    </>);
};

export default SearchCity;