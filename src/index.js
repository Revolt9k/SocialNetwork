import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';
import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import ReactDOM from "react-dom";
import App from "./App";
import store from "./state/state";
import {BrowserRouter} from "react-router-dom";

let rerenderAllTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
              <App state={store._state} dispatch={store.dispatch.bind(store)} />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderAllTree(store.getState())

store.subscribe(rerenderAllTree)

serviceWorker.register();
