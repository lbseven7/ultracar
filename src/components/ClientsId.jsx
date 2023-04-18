import React from 'react';
// import clientes from '../mocks/clientes';


function IdClients() {

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
    <div>
      <h2>Cliente já cadastrado?</h2>
   
      <form>
        <label htmlFor="name"> Nome </label>
        <input type="text" id="name" name="name"/>
        <label htmlFor="qrcode"> QRCode </label>
        <input type="qrcode" id="qrcode" name="qrcode" />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default IdClients;