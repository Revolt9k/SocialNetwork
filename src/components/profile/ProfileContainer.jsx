import React from "react";
import Profile from "./Profile";
import {getCurrentProfile} from "../../Redux/profileReducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        this.props.getCurrentProfile(userId)
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile} />
    }

}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})

let WithURLDataContainerComponent = withRouter(ProfileContainer);


export default connect(mapStateToProps, { getCurrentProfile}) (WithURLDataContainerComponent)