import NextLink from 'next/link';
import getConfig from 'next/config';

/* MATERIAL UI */
import { IconButton, Stack, Typography, useTheme } from '@mui/material';

/* MATERIAL UI | COMPONENTS */
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';

/* MATERIAL UI | ICONS */
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

/* APP HOOKS */
import useResponsive from '@/hooks/use-responsive';

const { publicRuntimeConfig } = getConfig();
export default function FooterLayout() {
  const theme = useTheme();
  const { breakpoints } = useResponsive();

  return (
    <Box sx={{ width: '100%' }}>
      <Paper
        sx={{
          py: { md: 2, xxs: 1 },
          bgcolor:
            theme.palette.mode === 'dark'
              ? 'inherit'
              : theme.palette.primary.main,
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'flex',
              flexDirection: { md: 'row', xxs: 'column-reverse' },
              alignItems: 'center',
              gap: 0.5,
            }}
          >
            <Stack alignItems={breakpoints.md ? 'start' : 'center'}>
              <Typography component="p" variant="body2">
                &copy; 2023 Pratama &quot;Sam1Dz&quot; Dimas
              </Typography>
              <Typography
                component="pre"
                variant="caption"
                fontFamily="Ubuntu Mono"
              >
                v{publicRuntimeConfig.version} &#40;
                <NextLink
                  href="https://github.com/Sam1Dz/sam1dz-dev/tree/126c9089086abb541c53c561cc202b488d5e1cc9"
                  target="_blank"
                  style={{
                    color:
                      theme.palette.mode === 'dark'
                        ? theme.palette.primary.main
                        : '#da0091',
                  }}
                >
                  126c908
                </NextLink>
                &#41; /{' '}
                <NextLink
                  href="https://github.com/Sam1Dz/sam1dz-dev/blob/prod/LICENSE"
                  target="_blank"
                  style={{
                    color:
                      theme.palette.mode === 'dark'
                        ? theme.palette.primary.main
                        : '#da0091',
                  }}
                >
                  MIT Lisence
                </NextLink>
              </Typography>
            </Stack>

            <Box sx={{ flexGrow: 1 }} />

            <Stack direction="row" spacing={1}>
              <NextLink href="https://github.com/Sam1Dz" target="_blank">
                <IconButton
                  size={
                    breakpoints.md
                      ? 'large'
                      : breakpoints.xs
                        ? 'medium'
                        : 'small'
                  }
                  color="inherit"
                >
                  <GitHubIcon />
                </IconButton>
              </NextLink>
              <NextLink
                href="https://www.linkedin.com/in/pratama-d-59b0ba128/"
                target="_blank"
              >
                <IconButton
                  size={
                    breakpoints.md
                      ? 'large'
                      : breakpoints.xs
                        ? 'medium'
                        : 'small'
                  }
                  color="inherit"
                >
                  <LinkedInIcon />
                </IconButton>
              </NextLink>
            </Stack>
          </Box>
        </Container>
      </Paper>
    </Box>
  );
}
