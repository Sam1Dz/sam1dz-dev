import React from 'react';

/* MATERAIL UI */
import { CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

/* MATERAIL UI | COMPONENTS */
import Box from '@mui/material/Box';

/* LAYOUT COMPONENTS */
import HeaderLayout from './header';
import FooterLayout from './footer';

declare module '@mui/system' {
  // eslint-disable-next-line no-unused-vars
  interface BreakpointOverrides {
    xxs: true;
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
  }
}

interface ILayoutProps {
  children: React.ReactNode;
}

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});

export default function Layout({ children }: ILayoutProps) {
  const [mode, setMode] = React.useState<'light' | 'dark'>('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: '#80d8ff',
          },
          secondary: {
            main: '#ff80d9',
          },
        },
        typography: {
          fontFamily: ['Montserrat', '"Roboto"', 'sans-serif'].join(','),
        },
        breakpoints: {
          values: {
            xxs: 0,
            xs: 320,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
          },
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <HeaderLayout />
        <Box component="main" minHeight="90vh">
          {children}
        </Box>
        <FooterLayout />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
