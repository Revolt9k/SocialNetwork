import React from "react";
import classes from './profileInfo.module.css';
import noava from "../../../assets/images/noava.jpg"
import Loader from "../../../assets/common/loader";

const ProfileInfo = (props) => {
    if(!props.profile) {
        return <Loader className={classes.loader}/>
    }
    return <div>
        <img className={classes.contentImg} src={props.profile.photos.large || noava} alt=""/>
        <div>
            <div className={classes.row + " " + "row"}>
                <div className={classes.key + " " + 'col-xs-6'}>
                    Name:
                </div>
                <div className={classes.value + " " + 'col-xs-6'}>
                    {props.profile.fullName}
                </div>
            </div>
            <div className={classes.row + " " + "row"}>
                <div className={classes.key + " " + 'col-xs-6'}>
                    Age:
                </div>
                <div className={classes.value + " " + 'col-xs-6'}>

                </div>
            </div>
            <div className={classes.row + " " + "row"}>
                <div className={classes.key + " " + 'col-xs-6'}>
                    From:
                </div>
                <div className={classes.value + " " + 'col-xs-6'}>

                </div>
            </div>
            <div className={classes.row + " " + "row"}>
                <div className={classes.key + " " + 'col-xs-6'}>
                    Looking for a job:
                </div>
                <div className={classes.value + " " + 'col-xs-6'}>
                    {props.profile.lookingForAJobDescription}
                </div>
            </div>
            <div className={classes.row + " " + "row"}>
                <div className={classes.key + " " + 'col-xs-6'}>
                    Vk link:
                </div>
                <div className={classes.value + " " + 'col-xs-6'}>
                    {props.profile.contacts.vk}
                </div>
            </div>
            <div className={classes.row + " " + "row"}>
                <div className={classes.key + " " + 'col-xs-6'}>
                    GitHub link:
                </div>
                <div className={classes.value + " " + 'col-xs-6'}>
                    {props.profile.contacts.github}
                </div>
            </div>



        </div>
    </div>


}


export default ProfileInfo