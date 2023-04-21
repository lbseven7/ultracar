import { ThemeProvider } from 'styled-components';

import { defaultTheme } from '../themes/ultracarTheme';

export default function Theme({ children }) {
  return <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>;
}