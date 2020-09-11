import React from "react";
import Dialogs from "./dialogs";
import {onMessageChangeActionCreator, sendMessageActionCreator} from "../../Redux/dialogsReducer";
import StoreContext from "../../storeContext";

const dialogsContainer = () => {


    return <StoreContext.Consumer>
        { (store) => {
                let state = store.getState()

                let SendMessage = () => {

                    if (state.dialogsPage.newMessageTextValue != false) {
                        store.dispatch(sendMessageActionCreator())
                    } else {
                        alert("Type some first")
                    }
                }

                let onMessageChange = (text) => {
                    store.dispatch(onMessageChangeActionCreator(text))
                }

                return <Dialogs localSendMesage={SendMessage}
                                onMessageChange={onMessageChange}
                                dialogs={state.dialogsPage.dialogsData}
                                messagies={state.dialogsPage.messagiesData}
                                newMessageTextValue={state.dialogsPage.newMessageTextValue}/>
            }
        }
    </StoreContext.Consumer>
}

export default dialogsContainer