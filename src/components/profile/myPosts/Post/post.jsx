import React from "react";
import classes from './post.module.css';


const Post = (props) => {
    return <div>
        <div className={classes.item}>

            <img src={props.avaUrl}  alt=""/>
            {props.author} :
        <div className={classes.message}>{props.message}</div>
        </div>
    </div>
}


export default Post