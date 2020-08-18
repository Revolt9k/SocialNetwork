import React from "react";
import classes from './myPosts.module.css';
import Post from './Post/post'

const MyPosts = () => {
    return <div>
        my posts
        <div className={classes.item}>
            <textarea name="" id="" cols="40" rows="2"></textarea>
            <button>Add post</button>
            <button>Remove</button>
        </div>
        <Post />
        <Post />
        <Post />

    </div>
}


export default MyPosts