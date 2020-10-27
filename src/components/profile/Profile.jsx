import React from "react";
import classes from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/profileInfo";
import MyPostsContainer from "./myPosts/myPostsContainer";
import FriendsContainer from "./friends/friendsContainer";

const Profile = (props) => {

    return <div className={classes.content}>
        <div className='row'>
            <div className='col-xs-6'>
                <ProfileInfo profile={props.profile}
                             status={props.status}
                             updateStatus={props.updateStatus}
                             isOwner={props.isOwner}
                             savePhoto={props.savePhoto}
                             setProfileInfo={props.setProfileInfo}/>
                <FriendsContainer />
            </div>
            <div className='col-xs-6'>
                <MyPostsContainer  />
            </div>
        </div>
    </div>
}




export default Profile