import React from 'react';
import Services from '../../components/Services';
import { ContainerStyle } from './style';
import SideBar from '../../components/Sidebar';


function Home() {
  return (
    <ContainerStyle>
      <main>
        <SideBar />
        <div>
          <h1>Serviços Oferecidos Pela Ultracar</h1>
          <Services />
        </div>
      </main>
    </ContainerStyle>
  );
}

export default Home;