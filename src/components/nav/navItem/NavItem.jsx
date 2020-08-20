import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import classes from './NavItem.module.css'


const NavItem = (props) => {
    return     <div className={classes.menu}>
        <div className={classes.item}>
            <a className={classes.link}> {props.text} </a>
        </div>

    </div>

}
export default NavItem