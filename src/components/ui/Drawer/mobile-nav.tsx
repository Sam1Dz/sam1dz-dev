import React from 'react';

/* REACT CONTEXT */
import { ColorModeContext } from '@/components/layout';

/* MATERIAL UI */
import { Button, useTheme } from '@mui/material';

/* MATERIAL UI | COMPONENTS */
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

/* MATERIAL UI | ICONS */
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
// import DescriptionIcon from '@mui/icons-material/Description';
// import SportsEsportsIcon from '@mui/icons-material/SportsEsports';

/* APP HOOKS */
import useResponsive from '@/hooks/use-responsive';

interface IDrawerMobileNavProps {
  open: boolean;
  onClose: () => void;
}

export default function DrawerMobileNav({
  open,
  onClose,
}: IDrawerMobileNavProps) {
  const theme = useTheme();
  const { breakpoints } = useResponsive();

  const colorMode = React.useContext(ColorModeContext);

  return (
    <Drawer
      anchor="top"
      open={open}
      onClose={onClose}
      sx={{
        width: 'auto',
        [`& .MuiDrawer-paper`]: {
          boxSizing: 'border-box',
        },
      }}
    >
      <Box
        sx={{
          pt: 7,
          bgcolor:
            theme.palette.mode === 'dark'
              ? '#272727'
              : theme.palette.primary.main,
        }}
      >
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AccountCircleIcon
                  fontSize={breakpoints.xs ? 'medium' : 'small'}
                  sx={{
                    color:
                      theme.palette.mode === 'dark'
                        ? 'inherit'
                        : 'rgba(0, 0, 0, 0.87)',
                  }}
                />
              </ListItemIcon>
              <ListItemText
                primary={
                  <React.Fragment>
                    <Typography variant="button">Profil</Typography>
                  </React.Fragment>
                }
              />
            </ListItemButton>
          </ListItem>
          {/* <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DescriptionIcon
                  fontSize={breakpoints.xs ? 'medium' : 'small'}
                  sx={{
                    color:
                      theme.palette.mode === 'dark'
                        ? 'inherit'
                        : 'rgba(0, 0, 0, 0.87)',
                  }}
                />
              </ListItemIcon>
              <ListItemText
                primary={
                  <React.Fragment>
                    <Typography variant="button">Proyek</Typography>
                  </React.Fragment>
                }
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <SportsEsportsIcon
                  fontSize={breakpoints.xs ? 'medium' : 'small'}
                  sx={{
                    color:
                      theme.palette.mode === 'dark'
                        ? 'inherit'
                        : 'rgba(0, 0, 0, 0.87)',
                  }}
                />
              </ListItemIcon>
              <ListItemText
                primary={
                  <React.Fragment>
                    <Typography variant="button">Mabar</Typography>
                  </React.Fragment>
                }
              />
            </ListItemButton>
          </ListItem> */}
        </List>

        <Divider
          sx={{
            borderColor: theme.palette.mode === 'dark' ? '#fff' : '#000000de',
          }}
        />

        <List>
          <ListItem disablePadding>
            <Box sx={{ width: '100%', py: 1, px: 2 }}>
              <Button
                variant="outlined"
                size={breakpoints.xs ? 'medium' : 'small'}
                startIcon={
                  theme.palette.mode === 'dark' ? (
                    <Brightness4Icon />
                  ) : (
                    <Brightness7Icon />
                  )
                }
                onClick={colorMode.toggleColorMode}
                fullWidth
                sx={
                  theme.palette.mode === 'dark'
                    ? {
                        color: '#fff',
                        borderColor: '#fff',
                        '&:hover': {
                          borderColor: '#fff',
                        },
                      }
                    : {
                        color: '#000000de',
                        borderColor: '#000000de',
                        '&:hover': {
                          borderColor: '#000000de',
                        },
                      }
                }
              >
                {theme.palette.mode === 'dark' ? 'Tema Gelap' : 'Tema Terang'}
              </Button>
            </Box>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
}
