import React from "react";
import classes from './music.module.css';

const music = () => {

    return <div className={classes.content}>
        <div className={classes.row + " " + "row"}>
            <div className={classes.col + " " + 'col-xs-4'}>
            </div>
            <div className={classes.col + " " + 'col-xs-4'}>In development
            </div>
            <div className={classes.col + " " + 'col-xs-4'}>
            </div>

        </div>
    </div>

}


export default music