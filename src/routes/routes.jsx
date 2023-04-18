import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import IdClients from '../components/ClientsId';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/clients/:id" component={IdClients} />
    </BrowserRouter>
  )
}

export default Routes;