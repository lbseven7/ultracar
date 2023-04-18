import React from 'react';
import Services from '../../components/Services';
import Header from '../../components/Header';
import { ContainerStyle } from './style';

function Home() {
  return (
    <ContainerStyle>
      <Header />
      <h1>Serviços Oferecidos Pela Ultracar</h1>
      <Services />
    </ContainerStyle>
  );
}

export default Home;