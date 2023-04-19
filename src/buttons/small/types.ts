import { ReactNode } from 'react';

export interface ISmallButton {
  children?: ReactNode;
  onClick?: any;
  href?: string;
  target?: string;
  disabled?: boolean;
}
