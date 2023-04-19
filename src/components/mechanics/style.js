import styled from 'styled-components';

export const Container = styled.div`
  /* background-color: #f2f2f2; */
  padding: 20px;
  text-align: left;
  width: 18.5vw;
`;

// TRANSACTIONS, VOLUME, PAYEES, AVAILABLE
export const Heading = styled.h4`
  font-size: 8px;
  color: #888;
  font-weight: bold;
  margin: 0;
`;

// paragraph
export const Transactions = styled.p`
  font-size: 1.5em;
  font-weight: bold;
  margin: 0;
  margin-top: 0.3em;
  margin-bottom: 0.3em;
`;

// percentage
export const Percentage = styled.span`
  display: flex;
  align-items: center;
  font-size: 0.8em;
  font-weight: bold;
`;

// icon arrow up
export const Arrow = styled.span`
  margin-right: 8px;
  color: #21ca21;
`;

// time period
export const Today = styled.span`
  color: #888;
`;

// divider
export const Divider = styled.hr`
  border-top: 1px solid gray;
  width: 100%;
  margin-top: 0.8em;
`;
