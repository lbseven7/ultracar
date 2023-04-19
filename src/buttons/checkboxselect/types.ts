import { ReactNode } from 'react';

export interface ICheckboxSelect {
  children?: ReactNode;
  options?: any;
  handleChange?: (event: any) => void;
  show?: boolean;
  variant?: 'white' | 'darker';
}
