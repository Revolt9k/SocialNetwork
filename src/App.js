import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Profile from "./components/profile/Profile";
import Dialogs from "./components/dialogs/dialogs";
import News from "./components/news/news";
import Music from "./components/music/music"
import Settings from "./components/settings/settings"
import {Route, BrowserRouter} from "react-router-dom";
import DialogsItem from "./components/dialogs/dialogsItem/dialogsItem";
import Messagies from "./components/dialogs/messagies/messagies";
import Post from "./components/profile/myPosts/Post/post";
import classes from "./components/profile/Profile.module.css";

const App = (props) => {



    return (
        <BrowserRouter>
            <container>
                <Header/>
                <Nav/>
                <div className='main_content'>
                    <Route path='/profile' render={ () => <Profile posts={props.posts}/> } />
                    <Route path='/dialogs' render={ () => <Dialogs dialogs={props.dialogs} messagies={props.messagies}  /> } />
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </container>
        </BrowserRouter>
    );
}


export default App;
