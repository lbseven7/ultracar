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
  min-width: 185px;
  height: 30px;
  gap: 5px;
  padding-left: 5px;
  padding-top: 3px;
  padding-bottom: 3px;
  padding-right: 12px;
  border-radius: 6px;
  font-size: 14px;
  line-height: 19px;
  width: ${({ width }) => (width ? width : 'unset')};
  > img {
    width: 20px;
    height: 20px;
    border-radius: 4px;
  }
  ${({ theme }) => {
    return `
      border: 1px solid ${theme.colors.secondary2_15};
      font-family: ${theme.fonts.family900};
      background-color: ${theme.colors.white};
      color: ${theme.colors.secondary2_75};
      > span {
        color: ${theme.colors.secondary2_100};
      }
      > svg > path {
        fill: ${theme.colors.secondary2_75};
      }
      &:hover {
        background-color: ${theme.colors.secondary2_25};
        border: 1px solid ${theme.colors.secondary2_25};
        > svg > path {
          fill: ${theme.colors.secondary2_75};
        }
      }
      &:focus {
        color: ${theme.colors.white75};
        background-color: ${theme.colors.secondary2_100};
        border: 1px solid ${theme.colors.secondary2_100};
        > span {
          color: ${theme.colors.white};
        }
        > svg > path {
          fill: ${theme.colors.white75};
        }
      }
      &:disabled {
        > img {
          opacity: 0.1;
        }
        color: ${theme.colors.secondary2_25};
        background-color: ${theme.colors.primary1_3};
        > span {
          color: ${theme.colors.secondary2_30};
        }
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
  width: ${({ optionswidth }) => (optionswidth ? optionswidth : '200px')};
  top: 47px;
  border: 1px solid ${({ theme }) => theme.colors.secondary1_25};
  border-radius: 6px;
  z-index: 10;
  right: 0;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 4px;
`;

export const DropdownSelectItem = styled.button`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 41px;
  width: 100%;
  background-color: transparent;
  padding: 8px 12px;
  gap: 10px;
  border: none;
  border-radius: 6px;
  font-family: ${({ theme }) => theme.fonts.family700};
  font-size: 14px;
  color: ${({ theme }) => theme.colors.secondary1_100};
  > img {
    width: 28px;
    height: 28px;
    border-radius: 4px;
  }
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary1_10};
  }
`;

export const DropdownLabel = styled.div`
  color: red;
`;
