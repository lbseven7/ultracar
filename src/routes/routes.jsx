import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from '../components/Login';
import Cadastro from '../components/Cadastro';


function Routes() {
  return (
    <BrowserRouter>
      {/* <Route path="/" exact component={Home} /> */}
      <Route path="/login" component={Login} />
      <Route path="/cadastro" component={Cadastro} />
    </BrowserRouter>
  )
}

export default Routes;