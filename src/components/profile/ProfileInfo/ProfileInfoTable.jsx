import classes from "./profileInfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import React from "react";
import ProfileInfoElement from "./ProfileInfoElement";


const ProfileInfoTable = (props) => {
    return <div className={classes.container}>
        <ProfileInfoElement name={"Status:"} whatToShow={
            <div>
                <ProfileStatusWithHooks status={props.status}
                                        updateStatus={props.updateStatus}/>
                <div className={classes.note}>
                    double click to edit!
                </div>
            </div>}/>
        <ProfileInfoElement name={"Name:"} whatToShow={props.profile.fullName}/>
        <ProfileInfoElement name={"About Me:"} whatToShow={props.profile.aboutMe}/>
        <ProfileInfoElement name={"Looking for a job:"} whatToShow={props.profile.lookingForAJobDescription}/>
        <ProfileInfoElement name={"Vk link:"} whatToShow={props.profile.contacts.vk}/>
        <ProfileInfoElement name={"GitHub link:"} whatToShow={props.profile.contacts.github}/>

        {!props.isOwner && <ProfileInfoElement name={" "}
                                               whatToShow={
                                                   <button className={classes.button + " " + classes.buttonAdd}
                                                           onClick={() => props.activateEditMode()}>
                                                       Change profile info</button>}/>
        }
    </div>
}


export default ProfileInfoTable