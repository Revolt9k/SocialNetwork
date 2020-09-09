import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';
import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import ReactDOM from "react-dom";
import App from "./App";
import store from "./Redux/reduxStore";
import {BrowserRouter} from "react-router-dom";

let rerenderAllTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
              <App state={state} dispatch={store.dispatch.bind(store)} store={store}/>
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
