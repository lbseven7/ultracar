import styled from 'styled-components';

import { IOnOff } from './types';

export const OnOffContainer = styled.div`
  display: flex;
`;

export const OnOffLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.secondary1_75};
  font-family: ${({ theme }) => theme.fonts.family700};
  font-size: 14px;
  line-height: 19px;
`;

export const OnOffSpan = styled.span`
  padding-left: 8px;
  font-family: ${({ theme }) => theme.fonts.family700};
  font-size: 14px;
  line-height: 19px;
`;

export const OnOffWrapper = styled.div`
  display: inline-block;
  width: 38px;
  height: 20px;
  position: relative;
  align-items: center;
`;

export const OnOffButton = styled.span<IOnOff>`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 38px;
  height: 20px;
  border-radius: 126px;
  font-family: ${({ theme }) => theme.fonts.family700};
  font-size: 13px;
  line-height: 18px;
  letter-spacing: -0.02em;
  ${({ checked, theme }) =>
    checked
      ? `
        background-color: ${theme.colors.system2_100};
        color: ${theme.colors.white};
        `
      : `
        background-color: ${theme.colors.secondary2_10};
        color: ${theme.colors.secondary2_50};
        `};

  ${({ disabled, theme }) =>
    disabled &&
    `
      background-color: ${theme.colors.secondary2_5} !important;
      border: 1px solid ${theme.colors.secondary2_10} !important;
  `}
  transition: 0.4s all ease;
  cursor: pointer;
`;
