import React from "react";
import classes from './Nav.module.css'


const Nav = () => {
    return <div className={classes.nav}>
        <div className={classes.item}>
            <a> profile</a>
        </div>
        <div className={classes.item}>
            <a> messagies</a>
        </div>
        <div className={classes.item}>
            <a> news</a>
        </div>
        <div className={classes.item}>
            <a> music</a>
        </div>
        <div className={classes.item}>
            <a> settings</a>
        </div>

    </div>
}
export default Nav