import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';
import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import ReactDOM from "react-dom";
import App from "./App";
import store from "./Redux/reduxStore";
import {BrowserRouter} from "react-router-dom";
import StoreContext from "./storeContext";

let rerenderAllTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <StoreContext.Provider value={store}>
                    <App />
                </StoreContext.Provider>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderAllTree(store.getState())

store.subscribe(() => {
    let state = store.getState()
    rerenderAllTree(state)
})

serviceWorker.register();
