import React from 'react';

/* MATERIAL UI */
import { useTheme } from '@mui/material';

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
// import DescriptionIcon from '@mui/icons-material/Description';
// import SportsEsportsIcon from '@mui/icons-material/SportsEsports';

/* APP HOOKS */
import useResponsive from '@/hooks/use-responsive';
import UIThemeButton from '../Theme/button';

interface IUIDrawerMobileNavProps {
  open: boolean;
  onClose: () => void;
}

export default function UIDrawerMobileNav({
  open,
  onClose,
}: IUIDrawerMobileNavProps) {
  const theme = useTheme();
  const { breakpoints } = useResponsive();

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
                  fontSize={breakpoints.xxs ? 'medium' : 'small'}
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
                  fontSize={breakpoints.xxs ? 'medium' : 'small'}
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
              <UIThemeButton
                size={breakpoints.xs ? 'medium' : 'small'}
                iconOnly={!breakpoints.xs}
              />
            </Box>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
}
