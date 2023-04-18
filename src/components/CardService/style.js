import styled from 'styled-components';

export const CardContainerStyle = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardImageStyle = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 5px 5px 0 0;
`;

export const CardTitleStyle = styled.h3`
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 1.2rem;
`;

export const CardDescriptionStyle = styled.p`
  margin-bottom: 10px;
`;

