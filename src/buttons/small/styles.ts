import styled from 'styled-components';

import { ISmallButton } from './types';

export const ButtonStyled = styled.button<ISmallButton>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary1_10};
  width: 25px;
  height: 25px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary1_100};
    color: ${({ theme }) => theme.colors.white};
    > svg > path {
      fill: ${({ theme }) => theme.colors.white};
    }
  }
  &:focus {
    background-color: ${({ theme }) => theme.colors.primary1_100};
    color: ${({ theme }) => theme.colors.white};
    > svg > path {
      fill: ${({ theme }) => theme.colors.white};
    }
  }
  ${({ disabled, theme }) =>
    disabled &&
    `
    background-color: ${theme.colors.primary1_3};
    color: ${theme.colors.primary1_25};
    > svg > path {
      fill: ${theme.colors.primary1_25};
    }
    &:hover,:focus {
      background-color: ${theme.colors.primary1_3};
      color: ${theme.colors.primary1_25};
      > svg > path {
        fill: ${theme.colors.primary1_25};
      }
    }
  `}
`;
