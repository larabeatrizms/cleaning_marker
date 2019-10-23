import React from 'react';
import './style.css';
import './style.js';

import { ImgLogo, ImgLogoMarca } from './style.js';

import logo from '../../assets/icon_cleaning_marker_pink.svg';
import logo_marca from '../../assets/logo_icon_cleaning_marker4.1.png';

function LogoLoginComponent() {
    return (
        <div className="container_logo">
          <ImgLogo src={logo} alt="Cleaning Marker" inputBg="none"/>
          <ImgLogoMarca src={logo_marca} alt="Cleaning Marker" />
        </div>
    );
}



export default LogoLoginComponent ;
