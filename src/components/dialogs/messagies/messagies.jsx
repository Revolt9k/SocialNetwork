import React from "react";
import classes from "./messagies.module.css"



const messagies = (props) => {
    return <div className={classes.content}>
            <div className={classes.name}>{props.message}</div>
        </div>
}
    export default messagies