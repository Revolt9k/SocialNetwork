import React from "react";
import classes from './myPosts.module.css';
import Post from './Post/post'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';




const MyPosts = (props) => {
    return <container>

            <div className={classes.textzone}>
                <textarea className={classes.textarea} name="" id="" ></textarea>
                <button className={classes.button}>Add post</button>
                <button className={classes.button}>Remove</button>
            </div>
        {props.post}



    </container>
}


export default MyPosts