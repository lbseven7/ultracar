import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SideBarContainer = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 15%;
  height: 100vh;
  border: 1px solid #ccc;
  
  > img {
    width: 90px;
    margin-top: 20px;
  }
`;

export const SidebarHeading = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 20px;
`;

export const LinkStyle = styled(Link)`
  text-decoration: none;
  width: 95%;
  margin-top: 20px;
  line-height: 50px;
  color: #1490c5;
  border: 1px solid #ccc;
  transition: all 0.4s ease-in-out;

  &:hover {
    background-color: #1490c5;
    color: #fff;
  }
`;


