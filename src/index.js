import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';
//is it needed?

import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import ReactDOM from "react-dom";
import App from "./App";
import state, {addPost, changeMessage, changePost, removePost, sendMessage, subscribe} from "./state/state";






let rerenderAllTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} removePost={removePost} sendMessage={sendMessage} changePost={changePost} changeMessage={changeMessage}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderAllTree()

subscribe(rerenderAllTree)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
