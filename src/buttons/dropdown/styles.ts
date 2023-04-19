import styled from 'styled-components';

import { IDropdownProps } from './types';

export const ButtonWrapper = styled.div`
  display: flex;
  position: relative;
`;

export const ButtonStyled = styled.button<IDropdownProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: none;
  height: 39px;
  gap: 8px;
  padding: 10px 10px 10px 16px;
  border-radius: 6px 0 0 6px;
  font-size: 14px;
  line-height: 19px;
  font-family: ${({ theme }) => theme.fonts.family700};
  width: ${({ width }) => (width ? width : 'unset')};

  ${({ theme }) => {
    return `
      background-color: ${theme.colors.primary1_10};
      color: ${theme.colors.primary1_100};
      > svg > path {
        fill: ${theme.colors.primary1_100};
      }
      &:hover {
        color: ${theme.colors.white};
        background-color: ${theme.colors.primary1_110};
        > svg > path {
          fill: ${theme.colors.white};
        }
      }
      &:focus {
        color: ${theme.colors.white};
        background-color: ${theme.colors.primary1_90};
        > svg > path {
          fill: ${theme.colors.white};
        }
      }
      &:disabled {
        color: ${theme.colors.primary1_30};
        background-color: ${theme.colors.primary1_3};
        > svg > path {
          fill: ${theme.colors.primary1_30};
        }
      }
    `;
  }}
`;

export const DropdownStyled = styled.button<IDropdownProps>`
  display: flex;
  align-items: center;
  border: none;
  height: 39px;
  font-size: 14px;
  line-height: 19px;
  font-family: ${({ theme }) => theme.fonts.family700};
  ${({ theme, variant }) => {
    switch (variant) {
      case 'sorting':
        return `
          justify-content: space-between;
          gap: 8px;
          padding: 10px 12px; 
          border-radius: 6px;
          color: ${theme.colors.secondary1_75};
          background-color: ${theme.colors.secondary1_10};
          > div {
            color: ${theme.colors.secondary1_100};
          }
          > svg > path {
            fill: ${theme.colors.secondary1_100};
          }
          &:hover {
            color: ${theme.colors.secondary1_75};
            background-color: ${theme.colors.secondary1_25};
          }
          &:focus {
            color: ${theme.colors.white75};
            background-color: ${theme.colors.secondary1_100};
            > div {
              color: ${theme.colors.white};
            }
            > svg > path {
              fill: ${theme.colors.white};
            }
          }
          &:disabled {
            color: ${theme.colors.secondary1_25};
            background-color: ${theme.colors.secondary1_3};
            > svg > path {
              fill: ${theme.colors.secondary1_25};
            }
          }
        `;
      case 'button':
        return `
          justify-content: center;
          width: 29px;
          border-radius: 0 6px 6px 0;
          color: ${theme.colors.primary1_100};
          background-color: ${theme.colors.primary1_25};
          > svg > path {
            fill: ${theme.colors.primary1_100};
          }
          &:hover {
            color: ${theme.colors.white};
            background-color: ${theme.colors.primary1_30};
          }
          &:focus {
            color: ${theme.colors.white};
            background-color: ${theme.colors.primary1_90};
            > svg > path {
              fill: ${theme.colors.white};
            }
          }
          &:disabled {
            color: ${theme.colors.primary1_30};
            background-color: ${theme.colors.primary1_3};
            > svg > path {
              fill: ${theme.colors.primary1_30};
            }
          }
        `;
    }
  }};
`;

export const DropdownSelectBox = styled.div<IDropdownProps>`
  display: ${({ dropdown }) => (dropdown ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  width: ${({ optionswidth }) => (optionswidth ? optionswidth : '100px')};
  top: 47px;
  border: 1px solid ${({ theme }) => theme.colors.secondary1_25};
  border-radius: 6px;
  z-index: 100;
  right: 0;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 4px;
`;

export const DropdownSelectItem = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 41px;
  width: 100%;
  background-color: transparent;
  padding: 10px;
  gap: 12px;
  border: none;
  border-radius: 6px;
  font-family: ${({ theme }) => theme.fonts.family700};
  font-size: 14px;
  color: ${({ theme }) => theme.colors.secondary1_100};
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary1_10};
  }
`;

export const DropdownLabel = styled.div`
  color: red;
`;
