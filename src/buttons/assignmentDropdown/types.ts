import { ReactNode } from 'react';

interface IDropdownOptions {
  value: number | string;
  firstName: string;
  lastName: string;
  image: string;
}

export interface IDropdownProps {
  children?: ReactNode;
  disabled?: boolean;
  options?: IDropdownOptions[];
  dropdown?: boolean;
  variant?: 'button' | 'sorting';
  width?: string;
  optionswidth?: string;
  optionsvalue?: number | string;
  value?: number | string;
  showOption?: boolean;
}
