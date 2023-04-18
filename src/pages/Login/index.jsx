import React from 'react';
import { Link} from 'react-router-dom';
import FormStyle from './style';


function Login() {

  const clientes = [
    {
      "id": 1,
      "nome": "João da Silva",
      "telefone": "(11) 9999-9999",
      "endereco": "Rua A, 123 - São Paulo/SP",
      "veiculo":
      {
        "marca": "Fiat",
        "modelo": "Uno",
        "ano": 2020,
        "placa": "ABC-1234",
        "qrCode": 569999542
      }
    },
    {
      "id": 2,
      "nome": "Maria Santos",
      "telefone": "(11) 8888-8888",
      "endereco": "Rua B, 456 - São Paulo/SP",
      "veiculo":
      {
        "marca": "Volkswagen",
        "modelo": "Gol",
        "ano": 2018,
        "placa": "DEF-5678",
        "qrCode": 987456321
      }
    },
    {
      "id": 3,
      "nome": "José Pereira",
      "telefone": "(11) 7777-7777",
      "endereco": "Rua C, 789 - São Paulo/SP",
      "veiculo":
      {
        "marca": "Ford",
        "modelo": "Ka",
        "ano": 2019,
        "placa": "GHI-9012",
        "qrCode": 123456789
      }
    }
   ]

  return (
    <>
      <FormStyle>
      <h2>Buscar cliente</h2>
        {/* <label htmlFor="name"> Buscar cliente por Nome </label> */}
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Digite o nome do cliente"
        />
        {/* <label htmlFor="qrcode"> Pelo QRCode </label> */}
        {/* <input
          type="qrcode"
          id="qrcode"
          name="qrcode"
          placeholder="Digite o QRCode do cliente"
        /> */}
        <button type="submit">Buscar Cliente</button>

        <Link to='/cadastro'>Cadastrar Novo</Link>
        
      </FormStyle>
    </>
  );
}

export default Login;