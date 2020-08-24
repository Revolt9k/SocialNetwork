import React from "react";
import classes from './Profile.module.css';
import MyPosts from "./myPosts/myPosts";
import ProfileInfo from "./ProfileInfo/profileInfo";
import Post from "./myPosts/Post/post";


const Profile = (props) => {



    return <div className={classes.content}>
        <div className='row'>
            <div className='col-xs-3'>
                <ProfileInfo />
            </div>
            <div className='col-xs-9'>

                <MyPosts posts={props.posts}/>
            </div>
        </div>
    </div>
}


export default Profile