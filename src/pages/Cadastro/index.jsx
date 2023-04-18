import React from 'react';
import FormStyle from '../Login/style';
import Header from '../../components/Header';
import { Link } from 'react-router-dom';

function Cadastro() {
  return (
    <>
      <Header />
      <FormStyle>
      <h2>Cadastrar novo cliente</h2>
        {/* <label htmlFor="name"> Nome </label> */}
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Digite o nome do cliente"
        />
    
        <button type="submit">Cadastrar Cliente</button>

        <Link to="/home">Voltar</Link>

      </FormStyle>
    </>
  );
}

export default Cadastro;