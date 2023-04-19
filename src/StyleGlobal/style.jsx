import styled from 'styled-components';

import back from '../assets/images/background.svg';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background1_100};
  background-image: url(${back});
  background-repeat: no-repeat;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;