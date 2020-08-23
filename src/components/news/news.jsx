import React from "react";
import classes from './news.module.css';


const news = (props) => {
    return <div className={classes.content}>
        <div className={classes.row + " " + "row"}>
            <div className={classes.col + " " + 'col-xs-2'}>
            </div>
            <div className={classes.feed + " " + 'col-xs-8'}>Some feed
            </div>
            <div className={classes.col + " " + 'col-xs-2'}>
            </div>

        </div>
    </div>
}

export default news