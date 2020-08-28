import React from "react";
import classes from './profileInfo.module.css';
import ava from "./ava.jpg"

const ProfileInfo = (props) => {
    return <div>
        <img className={classes.contentImg} src={ava} alt=""/>
        <div>
            <div className={classes.row + " " + "row"}>
                <div className={classes.key + " " + 'col-xs-6'}>
                    Name:
                </div>
                <div className={classes.value + " " + 'col-xs-6'}>
                    Ivan
                </div>
            </div>
            <div className={classes.row + " " + "row"}>
                <div className={classes.key + " " + 'col-xs-6'}>
                    Surname:
                </div>
                <div className={classes.value + " " + 'col-xs-6'}>
                    Ivanov
                </div>
            </div>
            <div className={classes.row + " " + "row"}>
                <div className={classes.key + " " + 'col-xs-6'}>
                    Age:
                </div>
                <div className={classes.value + " " + 'col-xs-6'}>
                    25
                </div>
            </div>
            <div className={classes.row + " " + "row"}>
                <div className={classes.key + " " + 'col-xs-6'}>
                    From:
                </div>
                <div className={classes.value + " " + 'col-xs-6'}>
                    Omsk, Russia
                </div>
            </div>
            <div className={classes.row + " " + "row"}>
                <div className={classes.key + " " + 'col-xs-6'}>
                    Languages:
                </div>
                <div className={classes.value + " " + 'col-xs-6'}>
                    Russian, English
                </div>
            </div>
            <div className={classes.row + " " + "row"}>
                <div className={classes.key + " " + 'col-xs-6'}>
                    Number:
                </div>
                <div className={classes.value + " " + 'col-xs-6'}>
                    8 800 555 35 35
                </div>
            </div>



        </div>
    </div>


}


export default ProfileInfo