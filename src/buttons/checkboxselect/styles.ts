import styled from 'styled-components';

import { ICheckboxSelect } from './types';

export const CheckboxSelectStyled = styled.div`
  display: flex;
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  position: relative;
`;

export const CheckboxSelectBox = styled.div<ICheckboxSelect>`
  display: ${({ show }) => (show ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: flex-start;
  position: absolute;
  align-items: left;
  width: 150px;
  top: 47px;
  border: 1px solid ${({ theme }) => theme.colors.secondary1_25};
  border-radius: 6px;
  z-index: 100;
  right: 0;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 4px;
  gap: 12px;
`;

export const CheckboxInput = styled.input`
  display: inline-flex;
  padding: 20px;
  color: red;
  width: 20px;
  height: 1.15em;
  border: 0.15em solid black;
  border-radius: 0.15em;
  transform: translateY(-0.075em);
`;
