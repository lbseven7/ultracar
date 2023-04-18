import React from 'react';
import { LinkStyle, SideBarContainer } from './style';
import Logo from '../../assets/images/cabecalho.png';

function SideBar() {
  return (
    <SideBarContainer>
        <img src={Logo} alt="Logo" />
        <LinkStyle to="/home">Home</LinkStyle>
        <LinkStyle to="/cadastro">Cadastrar</LinkStyle>
        <LinkStyle to="/">Buscar</LinkStyle>
    </SideBarContainer>
  )
}

export default SideBar;