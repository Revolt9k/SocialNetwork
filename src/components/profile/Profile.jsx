import React from "react";
import classes from './Profile.module.css';
import MyPosts from "./myPosts/myPosts";
import ava from "./bg.jpg"

const Profile = () => {
    return <div className={classes.content}>
        <div className='row'>
            <div className='col-xs-3'>
                main content
                <div>ava + description</div>
            </div>
            <div className='col-xs-9'>
        {/*<img className={classes.contentImg} src={ava} alt=""/>*/}

        <MyPosts />

            </div>
        </div>
    </div>
}


export default Profile