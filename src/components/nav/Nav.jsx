import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import classes from './Nav.module.css'
import NavItem from "./navItem/NavItem";

const Nav = () => {
    return <container>
    <div className={classes.menu}>
        <NavItem text='profile'/>
        <NavItem text='messagies'/>
        <NavItem text='news'/>
        <NavItem text='music'/>
        <NavItem text='settings'/>
    </div>
    </container>
}
export default Nav