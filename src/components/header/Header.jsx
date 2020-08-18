import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/navbar';
import React from "react";
import logo from './users-solid.svg'
import classes from './Header.module.css'

const Header = () => {
    return     <Navbar bg="primary" variant="light" className={classes.header} >
        <Navbar.Brand href="#home">
            <logo />
            <img
                alt="My social network"
                src={logo}
                width="100"
                height="100"
                className="d-inline-block align-middle "
            />

        </Navbar.Brand>
        My social network
    </Navbar>

}

export default Header;