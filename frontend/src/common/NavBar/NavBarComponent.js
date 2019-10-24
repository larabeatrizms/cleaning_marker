import React from 'react';
import { Link } from 'react-router-dom';

import { Nav, Navbar } from 'react-bootstrap';


import { StyledButton } from './style.js';
import LogoComponent from '../logo/LogoComponent.js';


function NavBarComponent({history}) {

    function handleClickLogin (){
        history.push('/home');
    }

    return (
        <>
            <Navbar bg="light" >
                <LogoComponent />
                <Nav className="mr-auto">
                <Nav.Link >
                    <Link to="/home">
                        HOME
                    </Link>
                </Nav.Link>
                <Nav.Link>
                    <Link to="/home">
                        PREÇOS
                    </Link>
                </Nav.Link>
                <Nav.Link>
                    <Link to="/home">
                        SOBRE NÓS
                    </Link>
                </Nav.Link>
                </Nav>
                <Link >
                    <StyledButton  variant="primary" onChange={handleClickLogin} >LOGIN</StyledButton >
                </Link>
                <Link to="/cadastro">
                    <StyledButton variant="primary" className="btn">CADASTRE-SE</StyledButton>
                </Link>
                
            </Navbar>
        </>
    );
}

export default NavBarComponent;
