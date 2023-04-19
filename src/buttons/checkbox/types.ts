import { ReactNode } from 'react';

export interface ICheckbox {
  children?: ReactNode;
  checked?: boolean;
  name?: string;
  onChange?: (event: any) => void;
  value?: string | number;
  disabled?: boolean;
  ref?: any;
  variant?: 'white' | 'darker';
}
