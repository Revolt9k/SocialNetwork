import React from "react";
import Dialogs from "./dialogs";
import {onMessageChange, sendMessage} from "../../Redux/dialogsReducer";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogsData,
        messagies: state.dialogsPage.messagiesData,
        newMessageTextValue: state.dialogsPage.newMessageTextValue
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onMessageChange: (text) => {
            dispatch(onMessageChange(text))
        },
        localSendMesage: () => {
            dispatch(sendMessage())
        }
    }
}

const dialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default dialogsContainer