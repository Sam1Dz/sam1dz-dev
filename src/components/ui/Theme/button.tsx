import React from 'react';

/* REACT CONTEXT */
import { ColorModeContext } from '@/components/layout';

/* REACT COOKIES */
import { useCookies } from 'react-cookie';

/* MATERIAL UI */
import { alpha, styled } from '@mui/material';

/* MATERIAL UI | COMPONENTS */
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

/* MATERIAL UI | ICONS */
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import PersonalVideoIcon from '@mui/icons-material/PersonalVideo';

interface IUIThemeButtonProps {
  iconOnly?: boolean;
  size?: 'small' | 'medium' | 'large';
}

const ButtonTheme = styled(Button)(({ theme }) => ({
  borderColor: theme.palette.mode === 'dark' ? '#FFF' : '#000000de',
  color: theme.palette.mode === 'dark' ? '#FFF' : '#000000de',
  '&:hover': {
    borderColor: theme.palette.mode === 'dark' ? '#FFF' : '#000000de',
    borderRoght: 'none',
    backgroundColor:
      theme.palette.mode === 'dark'
        ? alpha('#FFF', 0.08)
        : alpha('#000000de', 0.08),
  },
  '&.MuiButton-contained': {
    boxShadow: 'none',
    backgroundColor: theme.palette.mode === 'dark' ? '#FFF' : '#000000de',
    color: theme.palette.mode === 'dark' ? '#000000de' : '#FFF',
  },
}));

export default function UIThemeButton({
  iconOnly = false,
  size = 'medium',
}: IUIThemeButtonProps) {
  const colorMode = React.useContext(ColorModeContext);
  const [cookies] = useCookies(['colorMode', 'colorPreferedSystem']);

  return (
    <ButtonGroup size={size} fullWidth>
      <ButtonTheme
        variant={
          cookies.colorPreferedSystem === 0 && cookies.colorMode === 'light'
            ? 'contained'
            : 'outlined'
        }
        onClick={() => colorMode.toggleColorMode('light')}
        {...(!iconOnly && { startIcon: <LightModeIcon /> })}
      >
        {!iconOnly ? 'Terang' : <LightModeIcon fontSize={size} />}
      </ButtonTheme>
      <ButtonTheme
        variant={cookies.colorPreferedSystem === 1 ? 'contained' : 'outlined'}
        onClick={() => colorMode.toggleColorMode('system')}
        {...(!iconOnly && { startIcon: <PersonalVideoIcon /> })}
      >
        {!iconOnly ? 'Sistem' : <PersonalVideoIcon fontSize={size} />}
      </ButtonTheme>
      <ButtonTheme
        variant={
          cookies.colorPreferedSystem === 0 && cookies.colorMode === 'dark'
            ? 'contained'
            : 'outlined'
        }
        onClick={() => colorMode.toggleColorMode('dark')}
        {...(!iconOnly && { startIcon: <DarkModeIcon /> })}
      >
        {!iconOnly ? 'Gelap' : <DarkModeIcon fontSize={size} />}
      </ButtonTheme>
    </ButtonGroup>
  );
}
