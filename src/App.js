import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import HeaderContainer from "./components/header/HeaderContainer";
import Nav from "./components/nav/Nav";
import Settings from "./components/settings/settings"
import DialogsContainer from "./components/dialogs/dialogsContainer";
import {Route} from "react-router-dom";
import PeopleContainer from "./components/people/peopleContainer";
import PhotosContainer from "./components/photos/photosContainer";
import ProfileContainer from "./components/profile/ProfileContainer";
import LoginPage from "./components/Login/Login";



const App = (props) => {

    return (
            <div>
                <HeaderContainer/>
                <Nav/>
                <div className='main_content'>
                    <Route exact path={'/'}  render={ () => <ProfileContainer  /> } />
                    <Route path='/profile/:userId?' render={ () => <ProfileContainer  /> } />
                    <Route path='/dialogs' render={ () => <DialogsContainer  /> } />
                    <Route path='/people' render={ () => <PeopleContainer /> } />
                    <Route path='/photos' render={ () => <PhotosContainer /> } />
                    <Route path='/login' render={ () => <LoginPage /> } />
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
    );
}


export default App;
