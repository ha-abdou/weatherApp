import * as React from "react";
import { withNamespaces } from 'react-i18next';
import i18n from '../../../i18n';

const WeatherForecast: React.FC = ({ t }: any) => {
    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    return (<div>
        <button onClick={() => changeLanguage('fr')}>fr</button>
        <button onClick={() => changeLanguage('en')}>en</button>
        <p>{t("hi")}</p>
    </div>);
};

export default withNamespaces()(WeatherForecast);