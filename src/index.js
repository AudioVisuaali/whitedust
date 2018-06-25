import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from "react-redux";
import store from "./Store";

const app = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, app);

registerServiceWorker();
