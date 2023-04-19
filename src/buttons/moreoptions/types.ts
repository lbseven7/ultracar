import { ReactNode } from 'react';

export interface IOptions {
  label: string;
  icon: ReactNode;
  action: () => void;
}

export interface IProps {
  children: ReactNode;
  dropdown?: boolean;
  onClick?: () => void;
  options?: IOptions[];
  disabled?: boolean;
}
