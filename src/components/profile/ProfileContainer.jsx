import React from "react";
import Profile from "./Profile";
import {getCurrentProfile} from "../../Redux/profileReducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../HighOrderComponents/withAuthRedirect";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        this.props.getCurrentProfile(userId)
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile} />
    }

}
let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
})

let WithURLDataContainerComponent = withRouter(AuthRedirectComponent);


export default connect(mapStateToProps, { getCurrentProfile}) (WithURLDataContainerComponent)