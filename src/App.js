import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Profile from "./components/profile/Profile";
import Music from "./components/music/music"
import Settings from "./components/settings/settings"
import DialogsContainer from "./components/dialogs/dialogsContainer";
import {Route} from "react-router-dom";
import PeopleContainer from "./components/people/peopleContainer";



const App = (props) => {

    return (
            <container>
                <Header/>
                <Nav/>
                <div className='main_content'>
                    <Route exact path={'/'}  render={ () => <Profile  /> } />
                    <Route path='/profile' render={ () => <Profile  /> } />
                    <Route path='/dialogs' render={ () => <DialogsContainer  /> } />
                    <Route path='/people' render={ () => <PeopleContainer /> }/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </container>
    );
}


export default App;
