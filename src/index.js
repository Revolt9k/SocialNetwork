import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';
import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import ReactDOM from "react-dom";
import App from "./App";
import store from "./state/state";






let rerenderAllTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={store._state}
                 addPost={store.addPost.bind(store)}
                 removePost={store.removePost.bind(store)}
                 sendMessage={store.sendMessage.bind(store)}
                 changePost={store.changePost.bind(store)}
                 changeMessage={store.changeMessage.bind(store)}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderAllTree()

store.subscribe(rerenderAllTree)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
