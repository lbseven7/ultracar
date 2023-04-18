import styled from 'styled-components';

 const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  margin: auto;
  padding: 16px;
  gap: 16px;
  border: 2px solid #e8e8e8;

    > input  {
      background: #ededed;
      padding: 16px;
      outline: 1px solid #d8e7fa;
      border: none;
      width: 35%;
    }

    > button {
      background: #1490c5;
      color: #fff;
      padding: 16px;
      border: none;
      width: 38.5%;
      cursor: pointer;
      font-size: 1.2rem;
    }

    > a {
      text-decoration: none;
      color: #1490c5;
      font-size: 1.2rem;
    }
`;

export default FormStyle;