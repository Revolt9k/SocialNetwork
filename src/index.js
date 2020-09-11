import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';
import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import ReactDOM from "react-dom";
import App from "./App";
import store from "./Redux/reduxStore";
import StoreContext from "./storeContext.js";
import {BrowserRouter} from "react-router-dom";

let rerenderAllTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <StoreContext.Provider value={store}>\
                        <App />
                </StoreContext.Provider>
            </BrowserRouter>
            document.getElementById('root')
        </React.StrictMode>,
    );
}

rerenderAllTree(store.getState())

store.subscribe(() => {
    let state = store.getState()
    rerenderAllTree(state)
})

serviceWorker.register();
