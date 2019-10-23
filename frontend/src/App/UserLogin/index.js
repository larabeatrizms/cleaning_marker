import React, { useState } from 'react';

import api from '../../services/api';

import { Form } from 'react-bootstrap';
import { StyledButton, StyledFormRow } from './style.js';


export default function Login({ history }) {
    const [email, setEmail]= useState(''); 
    const [name, setName]= useState(''); 
    const [gender, setGender]= useState(''); 
    const [password, setPassword] = useState('');


    async function handleSubmit(event) {
      event.preventDefault();
  
      const response = await api.post('./usersessions', { email, name, gender, password });
      
      console.log(email, name, gender, password);
      
      const { _id } = response.data;
  
      localStorage.setItem('user', _id);

      //history.push('/dashboard');
    }
    
    return (
        <>  
        <p>
          Seja uma <strong>diarista</strong> parceira. A <strong>Cleaning Marker</strong> conecta você ao cliente de sua cidade.
        </p>

        <Form onSubmit={handleSubmit}>
          <Form.Label htmlFor="name">NOME COMPLETO *</Form.Label>
          <Form.Control 
            type="text" 
            id="name" 
            placeholder="Seu nome"
            value={name}
            onChange={event => setName(event.target.value)}
          />
          <Form.Label htmlFor="email">E-MAIL *</Form.Label>
          <Form.Control 
            type="email" 
            id="email" 
            placeholder="Seu melhor e-mail"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
          <Form.Label htmlFor="name">SEXO *</Form.Label>
          <StyledFormRow>
            <Form.Check
              inline
              label="FEMININO"
              type="checkbox"
              name="gender"
              id="Feminino" 
              onChange={() => {
                setGender(1);
                console.log(gender);
              }}
            />
            <Form.Check
              inline
              label="MASCULINO"
              type="checkbox"
              name="gender"
              id="Masculino" 
              onChange={() => {
                setGender(0);
                console.log(gender);
              }}
            />
          </StyledFormRow>
          <Form.Label>SENHA *</Form.Label>
          <Form.Control 
            type="password" 
            placeholder="Senha" 
            id="email" 
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
          

          <StyledButton  className="btn" type="submit" >ENVIAR</StyledButton>
        </Form>
        </>
    );
}