import React from "react";
import classes from './Profile.module.css';
import MyPosts from "./myPosts/myPosts";

const Profile = () => {
    return <div className={classes.content}>
        <img className={classes.contentImg} src="https://www.publicdomainpictures.net/pictures/320000/velka/background-image.png" alt=""/>
        main content
        <div>ava + description</div>
        <MyPosts />
    </div>
}


export default Profile