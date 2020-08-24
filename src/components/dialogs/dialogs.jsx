import React from "react";
import classes from './dialogs.module.css';
import DialogsItem from "./dialogsItem/dialogsItem";
import Messagies from "./messagies/messagies";


const dialogs = (props) => {




    return <div className={classes.content}>
        <div className={classes.row + " " + "row"}>
            <div className={classes.col + " " + 'col-xs-4'}>
                {props.dialogs}

            </div>
            <div className={classes.col + " " + 'col-xs-8'}>

                {props.messagies}

            </div>

        </div>
    </div>
}

export default dialogs