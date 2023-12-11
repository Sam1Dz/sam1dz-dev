import React from 'react';

/* REACT CONTEXT */
import { ColorModeContext } from '.';

/* MATERIAL UI */
import { useTheme } from '@mui/material';

/* MATERIAL UI | COMPONENTS */
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

/* MATERIAL UI | ICONS */
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import DeveloperModeRoundedIcon from '@mui/icons-material/DeveloperModeRounded';
import MenuIcon from '@mui/icons-material/Menu';

/* APP UI */
import DrawerMobileNav from '../ui/Drawer/mobile-nav';

/* APP HOOKS */
import useResponsive from '@/hooks/use-responsive';

export default function HeaderLayout() {
  const theme = useTheme();
  const { breakpoints } = useResponsive();

  const [openMobileDrawer, setOpenMobileDrawer] = React.useState(false);

  const colorMode = React.useContext(ColorModeContext);

  const AppBarExtendProps = openMobileDrawer && {
    boxShadow: 'none',
    border: 'none',
  };
  return (
    <React.Fragment>
      <AppBar
        position="sticky"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,

          ...AppBarExtendProps,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <DeveloperModeRoundedIcon
              fontSize={breakpoints.xs ? 'medium' : 'small'}
              sx={{ display: 'flex', mr: 1 }}
            />
            <Typography
              variant={breakpoints.xs ? 'h5' : 'body1'}
              noWrap
              sx={{
                mr: 2,
                display: 'flex',
                fontFamily: 'Ubuntu Mono',
                letterSpacing: '.25rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              sam1dz.dev
            </Typography>

            <Box sx={{ flexGrow: 1 }} />

            {/* Desktop */}
            <Box sx={{ display: { xxs: 'none', md: 'flex' } }}>
              <Stack direction="row" spacing={1}>
                <Button size="large" color="inherit">
                  Profil
                </Button>
                {/* <Button size="large" color="inherit">
                  Proyek
                </Button>
                <Button size="large" color="inherit">
                  Mabar
                </Button> */}
                <Tooltip
                  title={
                    theme.palette.mode === 'dark'
                      ? 'Ganti ke Tema Terang'
                      : 'Ganti ke Tema Gelap'
                  }
                >
                  <IconButton
                    size="large"
                    color="inherit"
                    onClick={colorMode.toggleColorMode}
                  >
                    {theme.palette.mode === 'dark' ? (
                      <Brightness4Icon />
                    ) : (
                      <Brightness7Icon />
                    )}
                  </IconButton>
                </Tooltip>
              </Stack>
            </Box>

            {/* Mobile */}
            <Box sx={{ display: { xxs: 'flex', md: 'none' } }}>
              <IconButton
                color="inherit"
                onClick={() => setOpenMobileDrawer(!openMobileDrawer)}
              >
                <MenuIcon fontSize={breakpoints.xs ? 'medium' : 'small'} />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <DrawerMobileNav
        open={openMobileDrawer}
        onClose={() => setOpenMobileDrawer(false)}
      />
    </React.Fragment>
  );
}
