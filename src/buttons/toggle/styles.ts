import styled from 'styled-components';

import { IToggle } from './types';

export const ToggleContainer = styled.div`
  display: flex;
`;

export const ToggleLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.secondary1_75};
  font-family: ${({ theme }) => theme.fonts.family700};
  font-size: 14px;
  line-height: 19px;
`;

export const ToggleSpan = styled.span`
  padding-left: 8px;
  font-family: ${({ theme }) => theme.fonts.family700};
  font-size: 14px;
  line-height: 19px;
`;

export const ToggleWrapper = styled.div`
  display: inline-block;
  width: 31px;
  height: 20px;
  position: relative;
`;

export const ToggleInput = styled.input<IToggle>`
  opacity: 0;
  width: 0;
  height: 0;
  &:checked + span {
    background-color: ${({ theme }) => theme.colors.primary1_100};
    border: 1px solid ${({ theme }) => theme.colors.primary1_100};
    &::before {
      transform: translateX(10px);
    }
    &:hover {
      background-color: ${({ theme }) => theme.colors.primary1_110};
      border: 1px solid ${({ theme }) => theme.colors.primary1_110};
    }
    ${({ disabled, theme }) =>
      disabled &&
      `
      background-color: ${theme.colors.secondary2_5} !important;
      border: 1px solid ${theme.colors.secondary2_10} !important;
  `}
  }
`;

export const ToggleButton = styled.span<IToggle>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 126px;
  background-color: ${({ theme }) => theme.colors.secondary2_15};
  border: 1px solid ${({ theme }) => theme.colors.secondary2_25};
  ${({ disabled, theme }) =>
    disabled &&
    `
      background-color: ${theme.colors.secondary2_5} !important;
      border: 1px solid ${theme.colors.secondary2_10} !important;
  `}
  transition: 0.4s all ease;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary2_25};
    border: 1px solid ${({ theme }) => theme.colors.secondary2_50};
  }
  &::before {
    content: '';
    width: 14px;
    height: 14px;
    position: absolute;
    left: 3px;
    botton: 3px;
    border-radius: 50%;
    transition: 0.4s all ease;
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: 0px 2px 3px rgba(23, 3, 18, 0.15);
    ${({ disabled, theme }) =>
      disabled &&
      `
      background-color: ${theme.colors.secondary2_3} !important;
  `}
  }
`;
