import React from "react";
import ProfileStatus from "./ProfileStatus";
import {connect} from "react-redux";
import {onStatusChange} from "../../../Redux/profileReducer";



let mapStateToProps = (state) => {
    return {
        status: state.profilePage.status,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onStatusChange: (newStatus) => {
            dispatch(onStatusChange(newStatus))
        }
    }
}


const profileStatusContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileStatus)

export default profileStatusContainer