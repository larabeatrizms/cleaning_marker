import React from 'react';
import Routes from './routes';

//common
import NavBarComponent from './common/NavBar/NavBarComponent';

//styles
import './scss/custom.scss';
import './App.css';



function App() {
  return (
    <>
      <NavBarComponent />
      <Routes />
    </>
  );
}

export default App;
