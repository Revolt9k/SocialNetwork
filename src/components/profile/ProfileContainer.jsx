import React from "react";
import Profile from "./Profile";
import * as axios from "axios";
import {setUserProfile, showCurrentUser} from "../../Redux/profileReducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        this.props.showCurrentUser(userId)
        // if(!userId) {
        //     userId = 11651
        // }
        // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(response => {
        //     this.props.setUserProfile(response.data)
        // });
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile} />
    }

}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

let WithURLDataContainerComponent = withRouter(ProfileContainer);


export default connect(mapStateToProps, {setUserProfile, showCurrentUser}) (WithURLDataContainerComponent)