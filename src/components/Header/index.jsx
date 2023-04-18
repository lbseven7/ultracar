import React from 'react';
import Logo from '../../assets/images/Logo Nova-04.png';
import ContainerStyle from './style';

function Header() {
  return (
    <ContainerStyle>
       <img src={Logo} alt="Logo" />
    </ContainerStyle>
  );
}

export default Header;