import React from "react";
import Profile from "./Profile";
import {getCurrentProfile, getStatus, updateStatus} from "../../Redux/profileReducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../HighOrderComponents/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId){
            userId = this.props.authorizedUserId
        }
        this.props.getCurrentProfile(userId)
        this.props.getStatus(userId)
    }

    render() {
        return <Profile {...this.props}
                        profile={this.props.profile}
                        status={this.props.status}
                        updateStatus={this.props.updateStatus}/>
    }

}
let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId : state.profilePage.userId
})


export default compose(
    connect(mapStateToProps, { getCurrentProfile, getStatus, updateStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)

