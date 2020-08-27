import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {addPost, changePost, removePost, sendMessage} from './state/state'
import state from "./state/state"



export let rerenderAllTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} removePost={removePost} sendMessage={sendMessage} changePost={changePost}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
