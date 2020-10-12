import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import HeaderContainer from "./components/header/HeaderContainer";
import Nav from "./components/nav/Nav";
import Settings from "./components/settings/settings"
import DialogsContainer from "./components/dialogs/dialogsContainer";
import {withRouter, Route} from "react-router-dom";
import PeopleContainer from "./components/people/peopleContainer";
import PhotosContainer from "./components/photos/photosContainer";
import ProfileContainer from "./components/profile/ProfileContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {initialiseApp} from "./Redux/AppReducer";
import {compose} from "redux";
import Loader from "./assets/common/loader";


class App extends React.Component {

    componentDidMount() {
        this.props.initialiseApp()
    }

    render() {
        if (!this.props.isInitialaised) {
            return <Loader />
        }

        return (
            <div>
                <HeaderContainer/>
                <Nav/>
                <div className='main_content'>
                    <Route exact path={'/'} render={() => <ProfileContainer/>}/>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                    <Route path='/people' render={() => <PeopleContainer/>}/>
                    <Route path='/photos' render={() => <PhotosContainer/>}/>
                    <Route path='/login' render={() => <Login/>}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    isInitialaised: state.app.isInitialaised
})


export default compose(
    withRouter,
    connect(mapStateToProps, {initialiseApp}),
    )(App)
