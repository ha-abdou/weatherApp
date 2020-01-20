import {useSnackbar} from "notistack";
import React, {CSSProperties, useEffect, useMemo} from "react";
import {useTranslation} from "react-i18next";
import {IAPICityWeatherResponse} from "../../../api";
import useSearchCity from "../../../hooks/useSearchCity";
import SearchInput from "../../atoms/SearchInput";

interface ISearchCityProps {
    onFound: (res: IAPICityWeatherResponse) => void,
}

const styles: CSSProperties = {maxWidth: "400px", margin: "auto", marginBottom: "10px"};

const SearchCity = ({onFound}: ISearchCityProps) => {
    const { loading, value, setValue, search, error } = useSearchCity(onFound);
    const { t } = useTranslation();
    const {enqueueSnackbar} = useSnackbar();

    useEffect(() => {
        if (error && error !== "") {
            enqueueSnackbar(t(error), { variant: "error" });
        }
    }, [error, enqueueSnackbar, t]);

    return (useMemo(() => (<SearchInput onSearch={search}
                                        style={styles}
                                        onChange={setValue}
                                        value={value}
                                        loading={loading}
                                        placeholder={t("searchCity")}
    />), [loading, search, setValue, t, value]));
};

export default SearchCity;