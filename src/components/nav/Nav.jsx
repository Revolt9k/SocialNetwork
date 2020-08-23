import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import classes from './Nav.module.css'
import NavItem from "./navItem/NavItem";

const Nav = () => {
    return <container>
        <nav className={classes.menu}>

            <NavItem text='profile' href="/profile"/>
            <NavItem text='dialogs' href="/dialogs"/>
            <NavItem text='news' href="/news"/>
            <NavItem text='music' href="/music"/>
            <NavItem text='settings' href="/settings"/>

        </nav>
    </container>
}
export default Nav