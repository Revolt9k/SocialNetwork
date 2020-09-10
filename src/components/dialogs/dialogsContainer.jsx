import React from "react";
import Dialogs from "./dialogs";
import {onMessageChangeActionCreator, sendMessageActionCreator} from "../../Redux/dialogsReducer";




const dialogsContainer = (props) => {

    let state = props.store.getState()

    let SendMessage = () => {

        if (state.dialogsPage.newMessageTextValue!=false) {
            props.store.dispatch(sendMessageActionCreator())
        } else {
            alert("Type some first")
        }
    }

    let onMessageChange = (text) => {
        props.store.dispatch(onMessageChangeActionCreator(text))
    }
    return <Dialogs localSendMesage={SendMessage}
                    onMessageChange={onMessageChange}
                    dialogs={state.dialogsPage.dialogsData}
                    messagies={state.dialogsPage.messagiesData}
                    newMessageTextValue={state.dialogsPage.newMessageTextValue}/>
}

export default dialogsContainer