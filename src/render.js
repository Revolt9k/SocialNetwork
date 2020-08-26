import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {addPost} from './state/state'
import {removePost} from "./state/state";
import {sendMessage} from "./state/state"
import state from "./state/state"



export let rerenderAllTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} removePost={removePost} sendMessage={sendMessage}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
