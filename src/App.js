import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Suspense} from 'react';
import './App.css';
import HeaderContainer from "./components/header/HeaderContainer";
import Nav from "./components/nav/Nav";
import DialogsContainer from "./components/dialogs/dialogsContainer";
import ProfileContainer from "./components/profile/ProfileContainer";
import {withRouter, Route, Switch} from "react-router-dom";
import PeopleContainer from "./components/people/peopleContainer";
import PhotosContainer from "./components/photos/photosContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {initialiseApp} from "./Redux/AppReducer";
import {compose} from "redux";
import Loader from "./assets/common/loader";
import NotFound from "./assets/common/notFound";

const Settings = React.lazy(() => import('./components/settings/settings'));


class App extends React.Component {

    componentDidMount() {
        this.props.initialiseApp()
    }

    render() {
        if (!this.props.isInitialaised) {
            return <Loader/>
        }

        return (
            <div>
                <HeaderContainer/>
                <Nav/>
                <div className='main_content'>
                    <Switch>
                        <Route exact path='/' render={() => <ProfileContainer/>}/>
                        <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                        <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                        <Route path='/people' render={() => <PeopleContainer/>}/>
                        <Route path='/photos' render={() => <PhotosContainer/>}/>
                        <Route path='/login' render={() => <Login/>}/>
                        <Route path='/settings' component={Settings}/>
                        <Route component={NotFound} />
                    </Switch>
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
