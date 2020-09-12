import React from "react";
import People from "./people";
import {connect} from "react-redux";
import {followAC, setUsersAC, unfollowAC} from "../../Redux/peopleReducer";

let mapStateToProps = (state) => {
    return {
        peopleList: state.peoplePage.peopleList
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setusers: (newUserList) => {
            dispatch(setUsersAC(newUserList))
        },
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(People)