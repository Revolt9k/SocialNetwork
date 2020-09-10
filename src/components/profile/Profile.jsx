import React from "react";
import classes from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/profileInfo";
import Friends from "./friends/friends";
import MyPostsContainer from "./myPosts/myPostsContainer";

const Profile = (props) => {



    return <div className={classes.content}>
        <div className='row'>
            <div className='col-xs-3'>
                <ProfileInfo />
                <Friends firends={props.friends} />
            </div>
            <div className='col-xs-9'>
                <MyPostsContainer /*posts={props.posts} dispatch={props.dispatch}  newPostText={props.newPostText}*/ store={props.store}/>
            </div>
        </div>
    </div>
}


export default Profile