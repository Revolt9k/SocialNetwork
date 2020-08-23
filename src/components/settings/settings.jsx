import React from "react";
import classes from './settings.module.css';


const settings = (props) => {
    return <div className={classes.content}>
        <div className={classes.row + " " + "row"}>
            <div className={classes.col + " " + 'col-xs-6'}>settings menu
            </div>
            <div className={classes.col + " " + 'col-xs-6'}>some settings
            </div>

        </div>
    </div>
}

export default settings