import { ReactNode } from 'react';

export interface IToggle {
  children?: ReactNode;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (value: any) => void;
  name?: string;
  value?: string | number;
  position?: 'before' | 'after';
}
