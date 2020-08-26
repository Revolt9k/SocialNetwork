import React from "react";
import classes from "./myMessagies.module.css"



const myMessagies = (props) => {
    return <div className={classes.content}>
            <div className={classes.name}>{props.message}</div>

        </div>

}
    export default myMessagies