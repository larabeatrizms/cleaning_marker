import React from 'react';

import { Nav, Navbar } from 'react-bootstrap';


import { StyledButton } from './style.js';
import LogoComponent from '../logo/LogoComponent.js';


function NavBarComponent() {

    return (
        <>
            <Navbar bg="light" >
                <LogoComponent />
                <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#precos">Preços</Nav.Link>
                <Nav.Link href="#sobre">Sobre nós</Nav.Link>
                </Nav>
                <StyledButton  variant="primary" >LOGIN</StyledButton >
                <StyledButton variant="primary" className="btn">CADASTRE-SE</StyledButton>
            </Navbar>
        </>
    );
}

export default NavBarComponent;
