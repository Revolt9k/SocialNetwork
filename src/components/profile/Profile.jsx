import React from "react";
import classes from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/profileInfo";
import MyPostsContainer from "./myPosts/myPostsContainer";
import FriendsContainer from "./friends/friendsContainer";
import Redirect from "react-router-dom/es/Redirect";

const Profile = (props) => {

if (!props.isAuth) return <Redirect to={"/login"} />

    return <div className={classes.content}>
        <div className='row'>
            <div className='col-xs-3'>
                <ProfileInfo profile={props.profile}/>
                <FriendsContainer />
            </div>
            <div className='col-xs-9'>
                <MyPostsContainer  />
            </div>
        </div>
    </div>
}


export default Profile