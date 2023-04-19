import { ThemeProvider } from 'styled-components';

import { defaultTheme } from '../themes/masspayTheme';

export default function Theme({ children }: any) {
  return <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>;
}