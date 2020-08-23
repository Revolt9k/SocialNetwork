import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import classes from './NavItem.module.css'
import {NavLink} from "react-router-dom";

const NavItem = (props) => {
    return     <div className={classes.menu}>
        <div className={classes.item}>
            <NavLink activeClassName={classes.active} className={classes.link} to={props.href}> {props.text} </NavLink>
        </div>

    </div>

}
export default NavItem