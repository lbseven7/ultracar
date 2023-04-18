import styled from 'styled-components';

export const SideBarContainer = styled.div`
  width: 250px;
  height: 100vh;
  background-color: #f0f0f0;
  padding: 20px;
`;

export const SidebarLink = styled.a`
  display: block;
  font-size: 1.2rem;
  margin-bottom: 10px;
  color: #333;
  text-decoration: none;
  &:hover {
    color: #555;
  }
`;

  export const SidebarHeading = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 20px;
`;
