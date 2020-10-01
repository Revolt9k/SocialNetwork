import Dialogs from "./dialogs";
import {onMessageChange, sendMessage} from "../../Redux/dialogsReducer";
import {connect} from "react-redux";
import React from "react";
import {withAuthRedirect} from "../../HighOrderComponents/withAuthRedirect";

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogsData,
        messagies: state.dialogsPage.messagiesData,
        newMessageTextValue: state.dialogsPage.newMessageTextValue,
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

let AuthRedirectComponent = withAuthRedirect(Dialogs);


const dialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default dialogsContainer