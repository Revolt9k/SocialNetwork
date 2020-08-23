import React from "react";
import classes from "./dialogsItem.module.css"
import {NavLink} from "react-router-dom";



const dialogsItem = (props) => {
    let path = "/dialogs/" + props.id

    return <NavLink to={path}> <div id={props.id} className={classes.content}>
            <div className={classes.img}><img src={props.imgUrl} alt=""/></div>
            <div className={classes.name}>{props.name}</div>
        </div>
    </NavLink>
}
    export default dialogsItem