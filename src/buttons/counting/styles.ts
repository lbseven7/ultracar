import styled from 'styled-components';

export const ButtonCountingStyled = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 12px;
  background-color: ${({ theme }) => theme.colors.secondary2_10};
  border-radius: 6px;
  height: 39px;
  font-family: ${({ theme }) => theme.fonts.family700};
  font-size: 14px;
  line-height: 19px;
  letter-spacing: -0.02em;
  gap: 10px;
  color: ${({ theme }) => theme.colors.secondary1_75};
`;

export const ButtonCountingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 6px;
`;

export const ButtonAction = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border: none;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 4px;
  > svg > path {
    fill: ${({ theme }) => theme.colors.secondary1_100};
  }
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary1_25};
  }

  &:focus {
    background-color: ${({ theme }) => theme.colors.secondary1_100};
    > svg > path {
      fill: ${({ theme }) => theme.colors.white};
    }
  }
`;

export const ButtonInput = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondary1_15};
  background-color: ${({ theme }) => theme.colors.secondary2_10};
  height: 20px;
  padding-left: 4px;
  font-family: ${({ theme }) => theme.fonts.family700};
  font-size: 14px;
  line-height: 19px;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.secondary1_100};
  caret-color: ${({ theme }) => theme.colors.secondary1_100};
  &:hover {
    background-color: ${({ theme }) => theme.colors.white};
    border: none;
    border-radius: 4px;
  }
  &:focus {
    background-color: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.primary1_100};
    border-radius: 4px;
  }
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &[type='number'] {
    -webkit-appearance: textfield;
    -moz-appearance: textfield;
    appearance: textfield;
  }
`;
