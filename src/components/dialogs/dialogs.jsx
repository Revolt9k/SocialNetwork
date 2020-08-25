import React from "react";
import classes from './dialogs.module.css';
import DialogsItem from "./dialogsItem/dialogsItem";
import Messagies from "./messagies/messagies";


const dialogs = (props) => {

    let mappedDialogs = props.dialogs
        .map( (dialog) => <DialogsItem id={dialog.id} name={dialog.name} imgUrl={dialog.imgUrl} /> );
    let mappedMessagies = props.messagies
        .map ((message) => <Messagies message={message.message} /> )


    return <div className={classes.content}>
        <div className={classes.row + " " + "row"}>
            <div className={classes.dialogs + " " + classes.col + " " + 'col-xs-4'}>
                {mappedDialogs}

            </div>
            <div className={"col-xs-1"}>

            </div>
            <div className={classes.messagies + " " + classes.col + " " + 'col-xs-7'}>

                {mappedMessagies}

            </div>

        </div>
    </div>
}

export default dialogs