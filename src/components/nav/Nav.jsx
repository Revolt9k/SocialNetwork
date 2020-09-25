import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import classes from './Nav.module.css'
import NavItem from "./navItem/NavItem";

const Nav = () => {
    return <div>
        <nav className={classes.menu}>

            <NavItem text='profile' href="/profile"/>
            <NavItem text='dialogs' href="/dialogs"/>
            <NavItem text='people' href="/people"/>
            <NavItem text='photos' href="/photos"/>
            <NavItem text='settings' href="/settings"/>

        </nav>
    </div>
}
export default Nav