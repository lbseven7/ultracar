import React from 'react';
import { Link} from 'react-router-dom';
import FormStyle from './style';
import Header from '../../components/Header';


function Login() {

  return (
    <>
      <Header />
      <FormStyle>
      <h2>Buscar cliente</h2>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Digite o nome do cliente"
        />
        <button type="submit">Buscar Cliente</button>

        <Link to='/cadastro'>Cadastrar Novo</Link>
        
      </FormStyle>
    </>
  );
}

export default Login;