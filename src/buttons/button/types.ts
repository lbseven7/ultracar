import { ReactNode } from 'react';

export interface IButtonProps {
  children?: ReactNode;
  type?: 'submit' | 'reset' | 'button';
  variant?:
    | 'water blue'
    | 'water blue inverted'
    | 'queen blue'
    | 'queen blue inverted'
    | 'red'
    | 'red inverted'
    | 'large'
    | 'forward action'
    | 'discard action'
    | 'secondary action'
    | 'back'
    | 'download'
    | 'calendar';
  disabled?: boolean;
  onClick?: (event?: any) => void;
  primary?: boolean;
  secondary?: boolean;
  tertiary?: boolean;
  rounded?: boolean;
  large?: boolean;
  small?: boolean;
  day?: boolean;
  width?: string;
  active?: boolean;
  range?: boolean;
}
