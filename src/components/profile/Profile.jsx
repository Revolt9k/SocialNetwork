import React from "react";
import classes from './Profile.module.css';
import MyPosts from "./myPosts/myPosts";
import ProfileInfo from "./ProfileInfo/profileInfo";
import Friends from "./friends/friends";

const Profile = (props) => {



    return <div className={classes.content}>
        <div className='row'>
            <div className='col-xs-3'>
                <ProfileInfo />
                <Friends firends={props.friends} />
            </div>
            <div className='col-xs-9'>

                <MyPosts posts={props.posts} addPost={props.addPost} removePost={props.removePost} newPostText={props.newPostText} changePost={props.changePost}/>
            </div>
        </div>
    </div>
}


export default Profile