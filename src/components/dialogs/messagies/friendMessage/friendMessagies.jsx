import React from "react";
import classes from "./friendMessagies.module.css"


const friendMessagies = (props) => {
    return <div className={props.friend}>
              <div className={classes.content}>
                   <div className={classes.name}>{props.message}</div>
              </div>
    </div>
}
export default friendMessagies