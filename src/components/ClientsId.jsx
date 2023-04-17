import React from 'react';
import { clientes } from '../mocks/clientes';


function IdClients() {

  const [cliente, setCliente] = React.useState(null);
  const [qrCode, setQrCode] = React.useState("");

  function handleQrCode(qrCode) {
    setQrCode(qrCode);

    const clienteEncontrado = clientes.find((cliente) => cliente.qrCode === qrCode);
    if (clienteEncontrado) {
      setCliente(clienteEncontrado);
    }
  }

  return (
    <div>
      <h2>Identificação do cliente</h2>
      <label htmlFor="qrCode">Leitura do QRCode</label>
      <input
        id="qrCode"
        type="text"
        value={qrCode}
        onChange={(event) => handleQrCode(event.target.value)}
      />
      {
        cliente && (
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
        )
      }
    </div>
  );
}

export default IdClients;