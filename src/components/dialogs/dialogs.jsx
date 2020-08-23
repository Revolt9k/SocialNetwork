import React from "react";
import classes from './dialogs.module.css';


const dialogs = (props) => {
    return <div className={classes.content}>
        <div className={classes.row + " " + "row"}>
            <div className={classes.col + " " + 'col-xs-4'}><div className={classes.item}></div>
            </div>
            <div className={classes.col + " " + 'col-xs-8'}>some dialogs here
            </div>

        </div>
    </div>
}

export default dialogs