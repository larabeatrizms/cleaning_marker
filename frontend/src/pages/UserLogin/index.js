import React from 'react';

import Login from '../../App/UserLogin/index.js';
//import { StyledLogoLoginComponent } from './style.js';
import LogoLoginComponent from '../../common/logoLogin/LogoLoginComponent.js';

export default function LoginPage({ history }) {
    return (
        <>  
          <div className="container">
            <LogoLoginComponent />
            <div className="content">
              <Login />
            </div>
          </div>
        </>
    );
}