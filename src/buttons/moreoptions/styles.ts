import styled from 'styled-components';

export const ButtonWrapper = styled.div`
  position: relative;
  display: flex;
`;

export const ButtonMoreOptionsStyled = styled.button`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  border-radius: 6px;
  width: 30px;
  height: 30px;
  border: none;
  background-color: transparent;
  &:hover {
    &:not(:disabled) {
      background-color: ${({ theme: theme }) => theme.colors.secondary1_10};
      > svg {
        > path {
          stroke: ${({ theme: theme }) => theme.colors.secondary1_100};
        }
        > circle {
          fill: ${({ theme: theme }) => theme.colors.secondary1_100};
        }
        fill: ${({ theme: theme }) => theme.colors.secondary1_100};
      }
    }
  }
  &:focus {
    &:not(:disabled) {
      background-color: ${({ theme: theme }) => theme.colors.secondary1_25};
      > svg {
        > path {
          stroke: ${({ theme: theme }) => theme.colors.secondary1_100};
        }
        > circle {
          fill: ${({ theme: theme }) => theme.colors.secondary1_100};
        }
        fill: ${({ theme: theme }) => theme.colors.secondary1_100};
      }
    }
  }
`;

export const DropdownStyled = styled.div<{
  dropdown: boolean;
  position: string;
}>`
  position: absolute;
  display: ${({ dropdown }) => (dropdown === true ? 'flex' : 'none')}
  flex-direction: column;
  width: 241px;
  min-width: 241px;
  min-height: 215px;
  top: 38px;
  left: ${({ position }) => (position === 'left' ? '0' : 'unset')};
  right: ${({ position }) => (position === 'right' ? '0' : 'unset')};
  background-color: ${({ theme }) => theme.colors.white};
  padding: 4px;
  border: 1px solid ${({ theme }) => theme.colors.secondary1_25};
  border-radius: 6px;
  z-index: 1;
`;

export const DropdownItem = styled.button`
  display: flex;
  justify-content: flex-start;
  align-items: center;
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

export const DropdownIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 15px;
  min-height: 15px;
  > svg > path {
    fill: ${({ theme }) => theme.colors.secondary1_100};
  }
`;
