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
  toggleColorMode: () => { },
});

export default function Layout({ children }: ILayoutProps) {
  const [cookies, setCookie] = useCookies(['colorMode', 'colorPreferedSystem']);

  const [initialized, setInitialized] = React.useState(false);
  const [isPreferedSystem, setIsPreferedSystem] = React.useState<number | null>(null);
  const [mode, setMode] = React.useState<Exclude<TColorMode, 'system'> | null>(
    null,
  );

  const checkSystemColor = () => {
    if (matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    } else {
      return 'light';
    }
  };

  const setColorPreferedSystem = React.useCallback(
    (withoutPrefered?: boolean) => {
      setMode(checkSystemColor());
      setCookie('colorMode', checkSystemColor(), { sameSite: 'lax' });

      if (!withoutPrefered) {
        setIsPreferedSystem(1);
        setCookie('colorPreferedSystem', 1, { sameSite: 'lax' });
      }
    },
    [setCookie],
  );

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: (colorMode: TColorMode) => {
        if (colorMode !== 'system') {
          setCookie('colorPreferedSystem', 0, { sameSite: 'lax' });
          setCookie('colorMode', colorMode, { sameSite: 'lax' });

          setIsPreferedSystem(0);
          setMode(colorMode);
        } else {
          setColorPreferedSystem();
        }
      },
    }),
    [setColorPreferedSystem, setCookie],
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

          setCookie('colorPreferedSystem', 0, { sameSite: 'lax' });
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
    setColorPreferedSystem,
    setCookie,
  ]);

  React.useEffect(() => {
    if (cookies.colorPreferedSystem === 1) {
      matchMedia('(prefers-color-scheme: dark)').addEventListener(
        'change',
        () => {
          console.log(cookies.colorPreferedSystem);
          setColorPreferedSystem(true);
        },
      );
    }
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
