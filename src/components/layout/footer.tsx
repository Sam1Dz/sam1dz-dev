import NextLink from 'next/link';
import getConfig from 'next/config';

/* MATERIAL UI */
import { IconButton, Stack, Typography, useTheme } from '@mui/material';

/* MATERIAL UI | COMPONENTS */
import { Box, Container, Paper } from '@mui/material';

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
                  href="https://github.com/Sam1Dz/sam1dz-dev/tree/8403026df72bd77841a8cce0b2229331c9f10c8b"
                  target="_blank"
                  style={{
                    color:
                      theme.palette.mode === 'dark'
                        ? theme.palette.primary.main
                        : '#da0091',
                  }}
                >
                  8403026
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
                  size={breakpoints.md ? 'large' : 'medium'}
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
                  size={breakpoints.md ? 'large' : 'medium'}
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
