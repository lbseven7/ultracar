import styled from 'styled-components';

 const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60%;
  margin: auto;
  padding: 16px;
  gap: 16px;
  border: 2px solid #e8e8e8;

    > input  {
      background: #ededed;
      padding: 16px;
      outline: 1px solid #d8e7fa;
      border: none;
      width: 25rem;
    }

    > button {
      background: #1490c5;
      color: #fff;
      padding: 16px;
      border: none;
      width: 25rem;
      cursor: pointer;
      font-size: 1.2rem;
    }

    > h2 {
      font-size: 1.5rem;
      color: #a6a6a6;
    }

    > a {
      text-decoration: none;
      color: #1490c5;
      font-size: 1.2rem;
    }


`;

export default FormStyle;