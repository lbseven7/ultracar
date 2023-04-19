import styled from 'styled-components';

export const ButtonWrapper = styled.div`
  display: flex;
  width: 67px;
  height: 45px;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  padding-left: 3px;
  padding-right: 8px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const ButtonImage = styled.div`
  display: flex;
  width: 39px;
  height: 39px;
  border-radius: 12px;
`;
