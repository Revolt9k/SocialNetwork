import React from "react";
import classes from './dialogs.module.css';
import DialogsItem from "./dialogsItem/dialogsItem";
import Messagies from "./messagies/friendMessage/friendMessagies";
import DialogsForm from "./dialogsForm";
import {DialogsItemType, MessagiesItemType} from "../../Redux/dialogsReducer";

type propsType = {
    SendMessage: Function,
    dialogs: Array<DialogsItemType>
    dispatch: Function,
    isAuth: boolean,
    messagies: Array<MessagiesItemType>,
}

const Dialogs = (props: propsType) => {
    let mappedDialogs = props.dialogs
        .map((dialog) => <DialogsItem key={dialog.id} id={dialog.id} name={dialog.name} imgUrl={dialog.imgUrl}/>);


    let friendMessagies = props.messagies
        .filter(item => item.fromMe !== true)
        .map((message) => <Messagies key={message.id} friend={classes.friend} message={message.message}/>)


    let myMessagies = props.messagies
        .filter(item => item.fromMe === true)
        .map((message) => <Messagies key={message.id} message={message.message}/>)


    return <div className={classes.content}>
        <div className={classes.row + " row"}>
            <div className={classes.dialogs + " " + classes.col + ' col-xs-4'}>

                {mappedDialogs}

            </div>
            <div className={"col-xs-1"}>

            </div>
            <div className={classes.messagies + " " + classes.col + ' col-xs-7'}>

                {friendMessagies}
                {myMessagies}

                <DialogsForm SendMesage={props.SendMessage}/>

            </div>

        </div>
    </div>
}

export default Dialogs