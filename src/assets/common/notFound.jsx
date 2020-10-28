import React from "react";
import classes from './notFound.module.css';


const NotFound = (props) => {
    return <div className={classes.content}>
        <div className={classes.row + " row"}>
            <div className={classes.col + ' col-xs-2'}>
            </div>
            <div className={classes.col + ' col-xs-8'}>Requested URL is not found!
            </div>
            <div className={classes.col + ' col-xs-2'}>
            </div>

        </div>
    </div>
}

export default NotFound