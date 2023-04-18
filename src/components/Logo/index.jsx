import React from 'react';
import logo from '../../assets/images/cabecalho.png';
import LogoStyle from './style';

function Logo() {
  return (
    <LogoStyle>
      <img src={logo} alt="Logo" id="image-uc"/>
    </LogoStyle>
  );
}

export default Logo;