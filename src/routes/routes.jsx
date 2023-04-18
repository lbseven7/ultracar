import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from '../components/Login';


function Routes() {
  return (
    <BrowserRouter>
      <Route path="/login" component={Login} />
    </BrowserRouter>
  )
}

export default Routes;