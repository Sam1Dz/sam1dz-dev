import React from 'react';

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
import DeveloperModeRoundedIcon from '@mui/icons-material/DeveloperModeRounded';
import MenuIcon from '@mui/icons-material/Menu';
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';

/* APP UI */
import UIDrawerMobileNav from '../ui/Drawer/mobile-nav';

/* APP HOOKS */
import useResponsive from '@/hooks/use-responsive';
import UIDialogSetTheme from '../ui/Dialog/set-theme';

export default function LayoutHeader() {
  const { breakpoints } = useResponsive();

  const [openMobileDrawer, setOpenMobileDrawer] = React.useState(false);
  const [openDialogTheme, setOpenDialogTheme] = React.useState(false);

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
                letterSpacing: { xs: '.5rem', xxs: '0.25rem' },
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
                <Tooltip title="Tema">
                  <IconButton
                    size="large"
                    color="inherit"
                    onClick={() => setOpenDialogTheme(true)}
                  >
                    <SettingsBrightnessIcon />
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
                <MenuIcon fontSize={breakpoints.md ? 'medium' : 'small'} />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <UIDrawerMobileNav
        open={openMobileDrawer}
        onClose={() => setOpenMobileDrawer(false)}
      />
      <UIDialogSetTheme
        open={openDialogTheme}
        onClose={() => setOpenDialogTheme(false)}
      />
    </React.Fragment>
  );
}
