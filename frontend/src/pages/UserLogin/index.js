import React from 'react';

import Login from '../../App/UserLogin/index.js';
//import { StyledLogoLoginComponent } from './style.js';
import LogoLoginComponent from '../../common/logoLogin/LogoLoginComponent.js';
import NavBarComponent from '../../common/NavBar/NavBarComponent.js';

export default function LoginPage({ history }) {
    return (
        <>  
          <NavBarComponent />
          <div className="container">
            <LogoLoginComponent />
            <div className="content">
              <Login />
            </div>
          </div>
        </>
    );
}