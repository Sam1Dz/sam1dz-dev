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

type TColorMode = 'light' | 'dark' | 'system';

interface ILayoutProps {
  children: React.ReactNode;
}

export const ColorModeContext = React.createContext<{
  // eslint-disable-next-line no-unused-vars
  toggleColorMode: (colorMode: TColorMode) => void;
}>({
  toggleColorMode: () => {},
});

export default function Layout({ children }: ILayoutProps) {
  const [initialized, setInitialized] = React.useState(false);
  const [mode, setMode] = React.useState<Exclude<TColorMode, 'system'> | null>(
    null,
  );

  const [cookies, setCookie] = useCookies(['colorMode', 'colorPreferedSystem']);

  const cookieColorPreferedSystemRef = React.useRef(
    cookies.colorPreferedSystem,
  );

  const checkSystemColor = () => {
    if (matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    } else {
      return 'light';
    }
  };

  const setCookieColorPreferedSystem = React.useCallback(
    (value: 0 | 1) => {
      cookieColorPreferedSystemRef.current = value;
      setCookie('colorPreferedSystem', value, { sameSite: 'lax' });
    },
    [setCookie],
  );

  const setColorPreferedSystem = React.useCallback(() => {
    setMode(checkSystemColor());
    setCookie('colorMode', checkSystemColor(), { sameSite: 'lax' });
    setCookieColorPreferedSystem(1);
  }, [setCookieColorPreferedSystem, setCookie]);

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: (colorMode: TColorMode) => {
        if (colorMode !== 'system') {
          setCookieColorPreferedSystem(0);
          setCookie('colorMode', colorMode, { sameSite: 'lax' });

          setMode(colorMode);
        } else {
          setColorPreferedSystem();
        }
      },
    }),
    [setCookieColorPreferedSystem, setColorPreferedSystem, setCookie],
  );

  const MUITheme = React.useMemo(
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
      if (typeof cookies.colorPreferedSystem !== 'undefined') {
        if (cookies.colorPreferedSystem !== 1) {
          if (cookies.colorMode) {
            setMode(cookies.colorMode);
          }

          setCookieColorPreferedSystem(0);
        } else {
          setColorPreferedSystem();
        }
      } else {
        setColorPreferedSystem();
      }

      setInitialized(true);
    }
  }, [
    cookies.colorMode,
    cookies.colorPreferedSystem,
    initialized,
    setCookieColorPreferedSystem,
    setColorPreferedSystem,
    setCookie,
  ]);

  React.useEffect(() => {
    const detectSystem = () => {
      if (cookieColorPreferedSystemRef.current === 1) setColorPreferedSystem();
    };

    matchMedia('(prefers-color-scheme: dark)').addEventListener(
      'change',
      detectSystem,
    );

    return () =>
      matchMedia('(prefers-color-scheme: dark)').removeEventListener(
        'change',
        detectSystem,
      );
  }, [cookies.colorPreferedSystem, setColorPreferedSystem]);

  if (mode === null) return null;

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={MUITheme}>
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
