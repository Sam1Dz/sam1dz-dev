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

export default function HeaderLayout() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <DeveloperModeRoundedIcon sx={{ display: 'flex', mr: 1 }} />
          <Typography
            variant="h5"
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

          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Stack direction="row" spacing={1}>
              {/* <Button size="large" color="inherit">
                Proyek
              </Button> */}
              <Button size="large" color="inherit">
                Profil
              </Button>
              {/* <Button size="large" color="inherit">
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
        </Toolbar>
      </Container>
    </AppBar>
  );
}
