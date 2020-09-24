import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/navbar';
import React from "react";
import logo from './empire-brands.svg'
import classes from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <div>
        <Navbar bg="primary" variant="light" className={classes.header}>
            <Navbar.Brand href="#home" className={classes.inner}>
                <img
                    alt="My social network"
                    src={logo}
                    className={classes.img}
                />
                <navitem className={classes.text}>Social Network</navitem>
            </Navbar.Brand>
            <div className={classes.loginBlock}>
                {props.isAuth ?
                    <NavLink className={classes.login} to={'/profile'}> You logined as: {props.login} </NavLink>
                    : <NavLink className={classes.login} to={'/login'}> Login </NavLink>}

            </div>
        </Navbar>
    </div>
}

export default Header;