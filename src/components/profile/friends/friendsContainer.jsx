import Friends from "./friends";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        friendsList: state.friends.friendsList
    }
}

let mapDispatchToProps = (dispatch) => {
    return {

    }
}

const  FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);

export default FriendsContainer