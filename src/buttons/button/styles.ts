import styled from 'styled-components';

import { IButtonProps } from './types';

export const ButtonStyled = styled.button<IButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  border: none;
  width: ${({ width }) => (width ? width : 'auto')};
  font-family: ${({ theme }) => theme.fonts.family700};
  letter-spacing: -0.02em;
  ${({ primary }) =>
    primary &&
    ` padding: 12px 16px;
      height: 45px;
      gap: 8px;
      font-size: 15px;
      line-height: 20px;
      border-radius: 8px;
    `}}
  ${({ secondary }) =>
    secondary &&
    ` padding: 10px 12px;
      height: 39px;
      gap: 6px;
      font-size: 14px;
      line-height: 19px;
      border-radius: 6px;
    `}}
  ${({ tertiary, rounded, theme }) =>
    tertiary &&
    ` font-family: ${rounded ? theme.fonts.family700 : theme.fonts.family900};
      height: 30px;
      padding: 6px 12px;
      gap: 6px;
      font-size: ${rounded ? `15px` : `14px`};
      line-height: ${rounded ? `20px` : `19px`};
      border-radius: ${rounded ? `53px` : `6px`};
    `}}
  ${({ large }) =>
    large &&
    ` padding: 22px 20px;
      height: 65px;
      gap: 80px;
      font-size: 16px;
      line-height: 22px;
      border-radius: 8px;
    `}}
  ${({ small }) =>
    small &&
    ` padding: 8px;
      height: 24px;
      width: 24px;
      font-size: 15px;
      line-height: 20px;
      border-radius: 4px;
  `}}
  ${({ day }) =>
    day &&
    ` padding: 8px;
    height: 30px;
    width: 30px;
    font-size: 15px;
    line-height: 20px;
    border-radius: 4px;
  `}}
  ${({ variant, theme, active, range }) => {
    switch (variant) {
      case 'water blue':
        return `
          color: ${theme.colors.white};
          background-color: ${theme.colors.primary1_100};
          > svg > path {
            fill: ${theme.colors.white};
          }
          &:hover {
            background-color: ${theme.colors.primary1_110};
          }
          &:focus {
            background-color: ${theme.colors.primary1_90};
          }
          &:disabled {
            color: ${theme.colors.primary1_30};
            background-color: ${theme.colors.primary1_3};
            > svg > path {
              fill: ${theme.colors.primary1_30};
            }
          }
        `;
      case 'water blue inverted':
        return `
          color: ${theme.colors.primary1_100};
          background-color: ${theme.colors.primary1_10};
          > svg > path {
            
            fill: ${theme.colors.primary1_100};
          }
          &:hover {
            color: ${theme.colors.white};
            background-color: ${theme.colors.primary1_110};
            > svg > path {
              
              fill: ${theme.colors.white};
            }
          }
          &:focus {
            color: ${theme.colors.white};
            background-color: ${theme.colors.primary1_90};
            > svg > path {
              
              fill: ${theme.colors.white};
            }
          }
          &:disabled {
            color: ${theme.colors.primary1_30};
            background-color: ${theme.colors.primary1_3};
            > svg > path {
              
              fill: ${theme.colors.primary1_30};
            }
          }
        `;
      case 'queen blue':
        return `
          color: ${theme.colors.white};
          background-color: ${theme.colors.secondary2_100};
          > svg > path {
            stroke: ${theme.colors.white};
            fill: ${theme.colors.white};
          }
          &:hover {
            color: ${theme.colors.white};
            background-color: ${theme.colors.secondary2_110};
          }
          &:focus {
            color: ${theme.colors.white};
            background-color: ${theme.colors.secondary2_90};
          }
          &:disabled {
            color: ${theme.colors.secondary2_30};
            background-color: ${theme.colors.secondary2_3};
            > svg > path {
              stroke: ${theme.colors.secondary2_30};
              fill: ${theme.colors.secondary2_30};
            }
          }
        `;
      case 'queen blue inverted':
        return `
          color: ${theme.colors.secondary2_100};
          background-color: ${theme.colors.secondary2_10};
          > svg > path {
            stroke: ${theme.colors.secondary2_100};
            fill: ${theme.colors.secondary2_100};
          }
          &:hover {
            color: ${theme.colors.white};
            background-color: ${theme.colors.secondary2_110};
            > svg > path {
              stroke: ${theme.colors.white};
              fill: ${theme.colors.white};
            }
          }
          &:focus {
            color: ${theme.colors.white};
            background-color: ${theme.colors.secondary2_90};
            > svg > path {
              stroke: ${theme.colors.white};
              fill: ${theme.colors.white};
            }
          }
          &:disabled {
            color: ${theme.colors.secondary2_30};
            background-color: ${theme.colors.secondary2_3};
            > svg > path {
              stroke: ${theme.colors.secondary2_30};
              fill: ${theme.colors.secondary2_30};
            }
          }
        `;
      case 'red':
        return `
          color: ${theme.colors.white};
          background-color: ${theme.colors.system1_100};
          > svg > path {
            stroke: ${theme.colors.white};
            fill: ${theme.colors.white};
          }
          &:hover {
            color: ${theme.colors.white};
            background-color: ${theme.colors.system1_110};
          }
          &:focus {
            color: ${theme.colors.white};
            background-color: ${theme.colors.system1_90};
          }
          &:disabled {
            color: ${theme.colors.system1_25};
            background-color: ${theme.colors.system1_3};
            > svg > path {
              stroke: ${theme.colors.system1_25};
              fill: ${theme.colors.system1_25};
            }
          }
          `;
      case 'red inverted':
        return `
          color: ${theme.colors.system1_100};
          background-color: ${theme.colors.system1_10};
          > svg > path {
            stroke: ${theme.colors.system1_100};
            fill: ${theme.colors.system1_100};
          }
          &:hover {
            color: ${theme.colors.white};
            background-color: ${theme.colors.system1_110};
            > svg > path {
              stroke: ${theme.colors.white};
              fill: ${theme.colors.white};
            }
          }
          &:focus {
            color: ${theme.colors.white};
            background-color: ${theme.colors.system1_90};
            > svg > path {
              stroke: ${theme.colors.white};
              fill: ${theme.colors.white};
            }
          }
          &:disabled {
            color: ${theme.colors.system1_25};
            background-color: ${theme.colors.system1_3};
            > svg > path {
              stroke: ${theme.colors.system1_25};
              fill: ${theme.colors.system1_25};
            }
          }
        `;
      case 'large':
        return `
          color: ${theme.colors.white};
          background-color: ${theme.colors.primary1_100};
          &:hover {
            background-color: ${theme.colors.primary1_110};
          }
          &:focus {
            background-color: ${theme.colors.primary1_90};
          }
          &:disabled {
            color: ${theme.colors.primary1_30};
            background-color: ${theme.colors.primary1_3};
          }
        `;
      case 'forward action':
        return `
          color: ${theme.colors.white};
          background-color: ${theme.colors.primary1_100};
          > svg > path {
            stroke: ${theme.colors.white};
          }
          &:hover {
            color: ${theme.colors.white};
            background-color: ${theme.colors.primary1_110};
            > svg > path {
              stroke: ${theme.colors.white};
            }
          }
          &:focus {
            color: ${theme.colors.white};
            background-color: ${theme.colors.primary1_90};
            > svg > path {
              stroke: ${theme.colors.white};
            }
          }
          &:disabled {
            color: ${theme.colors.primary1_30};
            background-color: ${theme.colors.primary1_3};
            > svg > path {
              stroke: ${theme.colors.primary1_30};
            }
          }
        `;
      case 'discard action':
        return `
          color: ${theme.colors.primary2_100};
          background-color: ${theme.colors.primary2_10};
          &:hover {
            color: ${theme.colors.white};
            background-color: ${theme.colors.primary2_100};
          }
          &:focus {
            color: ${theme.colors.white};
            background-color: ${theme.colors.primary2_90};
          }
          &:disabled {
            color: ${theme.colors.primary2_30};
            background-color: ${theme.colors.primary2_3};
          }
          `;
      case 'secondary action':
        return `
          color: ${theme.colors.secondary2_100};
          background-color: ${theme.colors.secondary2_5};
          &:hover {
            background-color: ${theme.colors.secondary2_25};
          }
          &:focus {
            background-color: ${theme.colors.secondary2_10};
          }
          &:disabled {
            color: ${theme.colors.secondary2_30};
            background-color: ${theme.colors.secondary2_3};
          }
        `;
      case 'back':
        return `
          min-width: 100px;
          color: ${theme.colors.secondary2_100};
          background-color: ${theme.colors.secondary2_10};
          &:hover {
            color: ${theme.colors.white};
            background-color: ${theme.colors.secondary2_100};
            > svg > path {
              fill: ${theme.colors.white};
            }
          }
          &:focus {
            color: ${theme.colors.white};
            background-color: ${theme.colors.secondary2_90};
            > svg > path {
              fill: ${theme.colors.white};
            }
          }
          &:disabled {
            color: ${theme.colors.secondary2_30};
            background-color: ${theme.colors.secondary2_3};
            > svg > path {
              fill: ${theme.colors.secondary2_30};
            }
          }
        `;
      case 'download':
        return `
          height: 25px;
          width: 25px;
          padding: 6px 6px;
          color: ${theme.colors.primary1_100};
          background-color: ${theme.colors.primary1_10};
          &:hover {
            color: ${theme.colors.white};
            background-color: ${theme.colors.primary1_100};
            > svg > path {
              fill: ${theme.colors.white};
            }
          }
          &:focus {
            color: ${theme.colors.white};
            background-color: ${theme.colors.primary1_90};
            > svg > path {
              fill: ${theme.colors.white};
            }
          }
          &:disabled {
            color: ${theme.colors.primary1_30};
            background-color: ${theme.colors.primary1_3};
            > svg > path {
              fill: ${theme.colors.primary1_30};
            }
          }
        `;
      case 'calendar':
        return `
            height: 30px;
            width: 30px;
            padding: 6px;
            color: ${
              range ? theme.colors.primary1_100 : theme.colors.secondary1_100
            };
            background-color: ${
              range ? theme.colors.primary1_10 : 'transparent'
            };
            &:hover {
              color: ${theme.colors.white};
              background-color: ${theme.colors.primary1_100};
              > svg > path {
                fill: ${theme.colors.white};
              }
            }
            &:focus {
              color: ${theme.colors.white};
              background-color: ${theme.colors.primary1_90};
              > svg > path {
                fill: ${theme.colors.white};
              }
            }
            &:disabled {
              color: ${theme.colors.primary1_30};
              background-color: ${theme.colors.primary1_3};
              > svg > path {
                fill: ${theme.colors.primary1_30};
              }
            }
            ${
              active &&
              `
                color: ${theme.colors.white};
                background-color: ${theme.colors.primary1_90};
                > svg > path {
                  fill: ${theme.colors.white};
                }
            `
            }
          `;
    }
  }}
`;
