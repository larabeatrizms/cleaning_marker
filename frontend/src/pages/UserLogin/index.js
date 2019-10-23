import React, { useState } from 'react';
import styled from 'styled-components';

import { Button } from 'react-bootstrap';

import api from '../../services/api';

const StyledButton = styled(Button)`
    border: 0;
    border-radius: 2px;
    padding: 5px 20px;
    font-size: 16px;
    font-weight: bold;
    background: #FF0066;
    color: #fff;
    cursor: pointer;

    :hover {
        background: #b00046;
    }
`;

export default function Login({ history }) {
    const [email, setEmail]= useState(''); 

    async function handleSubmit(event) {
      event.preventDefault();
  
      const response = await api.post('./sessions', { email });
  
      const { _id } = response.data;
  
      localStorage.setItem('user', _id);

      history.push('/dashboard');
    }
    return (
        <>  
        <p>
          Seja uma <strong>diarista</strong> parceira. A <strong>Cleaning Marker</strong> conecta você ao cliente de sua cidade.
        </p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="email">E-MAIL *</label>
          <input 
            type="email" 
            id="email" 
            placeholder="Seu melhor e-mail"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />

          <StyledButton  className="btn" type="submit" >Entrar</StyledButton>
          <p>
               
          </p>
          <StyledButton  type="submit">Cadastrar</StyledButton>
        </form>
        </>
    );
}