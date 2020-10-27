import classes from "./profileInfo.module.css";
import React from "react";

const ProfileInfoElement = (props) => {
    return <div className={classes.row + " row"}>
        <div className={classes.key + ' col-xs-6'}>
            {props.name}
        </div>
        <div className={classes.value + ' col-xs-6'}>
            {props.whatToShow}
        </div>
    </div>
}

export default ProfileInfoElement