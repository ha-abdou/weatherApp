import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {SettingsProvider} from "./hooks/useSettings/provider";
import './i18n';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<SettingsProvider><App /></SettingsProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();