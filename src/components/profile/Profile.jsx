import React from "react";
import classes from './Profile.module.css';
import MyPosts from "./myPosts/myPosts";
import ProfileInfo from "./ProfileInfo/profileInfo";


const Profile = () => {
    return <div className={classes.content}>
        <div className='row'>
            <div className='col-xs-3'>
                <ProfileInfo />
            </div>
            <div className='col-xs-9'>
                <MyPosts />
            </div>
        </div>
    </div>
}


export default Profile