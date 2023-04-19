import styled from 'styled-components';

import { IButtonSearchWrapperProps } from './types';

export const ButtonSearchWrapper = styled.div<IButtonSearchWrapperProps>`
  display: flex;
  position: relative;
  width: ${({ show }) => (show ? 463 : 45)}px;
  height: 45px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 12px;
  ${({ show, theme }) =>
    show &&
    `border: 1px solid ${theme.colors.primary1_100};
    
    `}
`;

export const ButtonSearchStyled = styled.button<{ show: boolean }>`
  display: ${({ show }) => (show ? 'none' : 'inline-flex')};
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  border: none;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 12px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary1_100};
    > svg > path {
      stroke: ${({ theme }) => theme.colors.white};
    }
  }
`;

export const ButtonSearchBox = styled.div<{ show: boolean }>`
  display: ${({ show }) => (show ? 'flex' : 'none')};
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  padding-left: 4px;
  padding-top: 4px;
  padding-bottom: 4px;
  & > svg > path {
    stroke: ${({ theme }) => theme.colors.secondary1_25};
  }
`;

export const SearchInput = styled.input`
  display: flex;
  align-items: center;
  width: 300px;
  border: none;
  font-family: ${({ theme }) => theme.fonts.family700};
  color: ${({ theme }) => theme.colors.secondary2_100};
  font-size: 15px;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${({ theme }) => theme.colors.primary2_25};
  }
  :-ms-input-placeholder {
    color: ${({ theme }) => theme.colors.primary2_25};
  }
`;

export const SelectSearchButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.secondary2_10};
  border: none;
  border-radius: 10px;
  padding: 12px;
  height: 37px;
  gap: 10px;
  font-family: ${({ theme }) => theme.fonts.family700};
  color: ${({ theme }) => theme.colors.secondary2_100};
  font-size: 15px;
`;
