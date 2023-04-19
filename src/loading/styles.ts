import styled from 'styled-components';

export const LoadingStyled = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  > svg {
    width: 50px;
    height: 50px;
    animation: rotate 1.5s linear infinite;
  }
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
