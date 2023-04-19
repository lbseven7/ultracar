import { ReactNode } from 'react';

export interface IOnOff {
  children?: ReactNode;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (value: any) => void;
  name?: string;
  value?: string | number;
  position?: 'before' | 'after';
}
