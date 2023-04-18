import React from 'react';
import FormStyle from '../Login/style';

function Cadastro() {
  return (
    <>
      <FormStyle>
      <h2>Cadastrar novo cliente</h2>
        <label htmlFor="name"> Nome </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Digite o nome do cliente"
        />
    
        <button type="submit">Cadastrar Cliente</button>

        <a
          href='https://mail.google.com/chat/u/0/#chat/space/AAAACfnje_s'
          target='_blank'
          rel="noreferrer">
          Voltar
        </a>
      </FormStyle>
    </>
  );
}

export default Cadastro;