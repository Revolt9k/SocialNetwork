import React from "react";
import classes from './dialogs.module.css';
import DialogsItem from "./dialogsItem/dialogsItem";
import Messagies from "./messagies/friendMessage/friendMessagies";
import {sendMessage} from "../../state/state";


const dialogs = (props) => {

    let mappedDialogs = props.dialogs
        .map( (dialog) => <DialogsItem id={dialog.id} name={dialog.name} imgUrl={dialog.imgUrl} /> );


    let friendMessagies = props.messagies
        .filter(item =>  item.fromMe != true)
        .map ((message) => <Messagies friend={classes.friend} message={message.message} /> )


    let myMessagies = props.messagies
        .filter(item =>  item.fromMe == true)
        .map ((message) => <Messagies message={message.message} /> )

    let sendMessageRef = React.createRef()

    let localSendMessage = () => {
        let text = sendMessageRef.current.value
        if (text!=false) {
            sendMessage(text)
        } else {
            alert("Type some first")
        }

        sendMessageRef.current.value = " "
    }

    return <div className={classes.content}>
        <div className={classes.row + " " + "row"}>
            <div className={classes.dialogs + " " + classes.col + " " + 'col-xs-4'}>
                {mappedDialogs}

            </div>
            <div className={"col-xs-1"}>

            </div>
            <div className={classes.messagies + " " + classes.col + " " + 'col-xs-7'}>

                {friendMessagies}
                {myMessagies}

                <div className={classes.textzone}><textarea ref={sendMessageRef} className={classes.textarea}></textarea> <button  onClick={localSendMessage} className={classes.sendButton}>send</button> </div>


            </div>

        </div>
    </div>
}

export default dialogs