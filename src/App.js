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



const App = (props) => {



    return (
            <container>
                <Header/>
                <Nav/>
                <div className='main_content'>
                    <Route exact path={'/'}  render={ () => <Profile posts={props.state.profilePage.postsData} friends={props.state.firends} dispatch={props.dispatch} newPostText={props.state.profilePage.newPostTextValue} /> } />
                    <Route path='/profile' render={ () => <Profile posts={props.state.profilePage.postsData} friends={props.state.firends} dispatch={props.dispatch} newPostText={props.state.profilePage.newPostTextValue}  /> } />
                    <Route path='/dialogs' render={ () => <Dialogs dialogs={props.state.dialogsPage.dialogsData} messagies={props.state.dialogsPage.messagiesData}  dispatch={props.dispatch} newMessageText={props.state.dialogsPage.newMessageTextValue}/> } />
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </container>
    );
}


export default App;
