import React, { useState } from 'react';

import api from '../../services/api';

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
            <h1> hello </h1>
        
        </>
    );
}