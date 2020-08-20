import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/navbar';
import React from "react";
import logo from './empire-brands.svg'
import classes from './Header.module.css'

const Header = () => {
    return     <Navbar bg="primary" variant="light" className={classes.header} >
        <Navbar.Brand href="#home" className={classes.inner}>
            <img
                alt="My social network"
                src={logo}
                className={classes.img}
            />
            <navitem className={classes.text}>Welcome to my social Network</navitem>
        </Navbar.Brand>

    </Navbar>

}

export default Header;