import React from 'react';

function IdClients() {
  return (
    <div>
      <h1>Identificação do cliente</h1>
      <form>
        <label htmlFor="name">Nome</label>
        <input type="text" id="name" name="name" />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />
        <label htmlFor="cpf">CPF</label>
        <input type="text" id="cpf" name="cpf" />
        <label htmlFor="address">Endereço</label>
        <input type="text" id="address" name="address" />
        <label htmlFor="city">Cidade</label>
        <input type="text" id="city" name="city" />
        <label htmlFor="state">Estado</label>
        <select >
          <option value="SP">São Paulo</option>
        </select>
      </form>
      
    </div>
  );
}

export default IdClients;