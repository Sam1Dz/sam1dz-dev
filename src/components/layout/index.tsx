import React from 'react';

/* REACT COOKIES */
import { useCookies } from 'react-cookie';

/* MATERAIL UI */
import { CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

/* MATERAIL UI | COMPONENTS */
import Box from '@mui/material/Box';

/* LAYOUT COMPONENTS */
import LayoutHeader from './header';
import LayoutFooter from './footer';

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
  const [cookies, setCookie] = useCookies(['colorMode']);

  const [initialized, setInitialized] = React.useState(false);
  const [mode, setMode] = React.useState<'light' | 'dark' | null>(null);
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => {
          setCookie('colorMode', prevMode === 'light' ? 'dark' : 'light', {
            sameSite: 'lax',
          });
          return prevMode === 'light' ? 'dark' : 'light';
        });
      },
    }),
    [setCookie],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: mode !== null ? mode : 'light',
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

  React.useEffect(() => {
    if (!initialized) {
      if (cookies.colorMode) {
        setMode(cookies.colorMode);
      } else {
        setMode('dark');
        setCookie('colorMode', 'dark', { sameSite: 'lax' });
      }

      setInitialized(true);
    }
  }, [cookies.colorMode, initialized, setCookie]);

  if (mode === null) return null;

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <LayoutHeader />
        <Box component="main" minHeight="90vh">
          {children}
        </Box>
        <LayoutFooter />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
