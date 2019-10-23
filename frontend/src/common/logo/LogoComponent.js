import React from 'react';
import './style.css';
import './style.js';

import { Navbar } from 'react-bootstrap';

import logo from '../../assets/icon_cleaning_marker_pink.svg';
import logo_marca from '../../assets/logo_icon_cleaning_marker_pink.png';

function LogoComponent() {
    return (
        <Navbar.Brand href="#home">
            <div className="container_logo_navbar" href="#home">
                <img src={logo} alt="Cleaning Marker" className="logo"/>
                <img src={logo_marca} alt="Claning Marker" className="logo_marca"/>
            </div>
        </Navbar.Brand>
    );
}



export default LogoComponent ;
