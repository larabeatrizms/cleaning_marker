import React from 'react';
import Routes from './routes';

//common
import NavBarComponent from './common/NavBar/NavBarComponent';
import LogoLoginComponent from './common/logoLogin/LogoLoginComponent';


//styles
import './scss/custom.scss';
import './App.css';



function App() {
  return (
    <>
      <NavBarComponent />
      <div className="container">
        <LogoLoginComponent />

        <div className="content">
          <Routes />
        </div>
      </div>

    </>
  );
}

export default App;
