import React from "react";
import classes from './profileInfo.module.css';
import ava from "./ava.jpg"

const ProfileInfo = (props) => {
    return <div>
            <img className={classes.contentImg} src={ava} alt=""/>
        <div>There is some info about my profile</div>
    </div>


}


export default ProfileInfo