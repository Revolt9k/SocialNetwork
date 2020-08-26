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
        <BrowserRouter>
            <container>
                <Header/>
                <Nav/>
                <div className='main_content'>
                    <Route exact path={'/'}  render={ () => <Profile posts={props.state.profilePage.postsData} friends={props.state.firends} addPost={props.addPost} removePost={props.removePost}/> } />
                    <Route path='/profile' render={ () => <Profile posts={props.state.profilePage.postsData} friends={props.state.firends} addPost={props.addPost} removePost={props.removePost}/> } />
                    <Route path='/dialogs' render={ () => <Dialogs dialogs={props.state.dialogsPage.dialogsData} messagies={props.state.dialogsPage.messagiesData}  sendMessage={props.sendMessage}/> } />
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </container>
        </BrowserRouter>
    );
}


export default App;
