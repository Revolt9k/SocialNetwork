import React from "react";
import Profile from "./Profile";
import {getCurrentProfile, getStatus, updateStatus, savePhoto, getProfileInfo} from "../../Redux/profileReducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../HighOrderComponents/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    refreshProfile = () => {
        let userId = this.props.match.params.userId
        if(!userId){
            userId = this.props.authorizedUserId
        }
        this.props.getCurrentProfile(userId)
        this.props.getStatus(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {
        return <Profile {...this.props}
                        isOwner={this.props.match.params.userId}
                        profile={this.props.profile}
                        status={this.props.status}
                        updateStatus={this.props.updateStatus}
                        savePhoto={this.props.savePhoto}
                        setProfileInfo={this.props.getProfileInfo}/>
    }

}
let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId : state.profilePage.userId,
})


export default compose(
    connect(mapStateToProps, { getCurrentProfile, getStatus, updateStatus, savePhoto, getProfileInfo}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)

