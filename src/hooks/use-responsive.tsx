/* MATERIAL UI */
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function useResponsive() {
  const { breakpoints } = useTheme();

  return {
    breakpoints: {
      xxs: useMediaQuery(breakpoints.up('xxs')),
      xs: useMediaQuery(breakpoints.up('xs')),
      sm: useMediaQuery(breakpoints.up('sm')),
      md: useMediaQuery(breakpoints.up('md')),
      lg: useMediaQuery(breakpoints.up('lg')),
      xl: useMediaQuery(breakpoints.up('xl')),
    },
  };
}
