import styled from 'styled-components';

import checked from '../../../assets/icons/icon_checked.svg';
import { ICheckbox } from './types';

export const CheckboxContainer = styled.div`
  display: flex;
`;

export const CheckboxLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const CheckboxSpan = styled.span<ICheckbox>`
  padding-left: 8px;
  color: ${({ theme }) => theme.colors.primary2_100};
  font-family: ${({ theme }) => theme.fonts.family700};
  font-size: 14px;
  line-height: 19px;
  letter-spacing: -0.02em;
  ${({ disabled, theme }) =>
    disabled &&
    `
      color: ${theme.colors.primary2_25};
  `}
`;

export const CheckboxWrapper = styled.div`
  display: inline-block;
  width: 24px;
  height: 24px;
  position: relative;
`;

export const CheckboxInput = styled.input<ICheckbox>`
  opacity: 0;
  width: 0;
  height: 0;
  &:checked + span {
    background-color: ${({ theme }) => theme.colors.primary1_100};
    background-image: url(${checked});
    background-repeat: no-repeat;
    background-position: center;
    border: none;
    &:hover {
      background-color: ${({ theme }) => theme.colors.primary1_110};
    }
    ${({ disabled, theme }) =>
      disabled &&
      `
      background-color: ${theme.colors.white} !important;
      border: 1px solid ${theme.colors.primary2_3} !important;
  `}
  }
`;

export const CheckboxButton = styled.span<ICheckbox>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 6px;
  background-color: ${({ theme, variant }) =>
    variant === 'white' ? theme.colors.primary1_3 : theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.primary1_15};
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary1_25};
    border: 1px solid ${({ theme }) => theme.colors.primary1_50};
  }
  &::before {
    content: '';
    position: absolute;
    transition: 0.4s all ease;
    background-color: ${({ theme }) => theme.colors.white};
  }
`;
