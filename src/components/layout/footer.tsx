import NextLink from 'next/link';
import getConfig from 'next/config';

/* MATERIAL UI */
import { IconButton, Stack, Typography, useTheme } from '@mui/material';

/* MATERIAL UI | COMPONENTS */
import { Box, Container, Paper } from '@mui/material';

/* MATERIAL UI | ICONS */
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const { publicRuntimeConfig } = getConfig();
export default function FooterLayout() {
  const theme = useTheme();

  return (
    <Box sx={{ width: '100%' }}>
      <Paper
        sx={{
          py: 2,
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
              flexDirection: 'row',
              alignItems: 'center',
              gap: 2,
            }}
          >
            <Stack>
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
                  href="https://github.com/Sam1Dz"
                  target="_blank"
                  style={{
                    color:
                      theme.palette.mode === 'dark'
                        ? theme.palette.primary.main
                        : '#da0091',
                  }}
                >
                  69acdfc
                </NextLink>
                &#41;
              </Typography>
            </Stack>

            <Box sx={{ flexGrow: 1 }} />

            <Stack direction="row" spacing={1}>
              <NextLink href="https://github.com/Sam1Dz" target="_blank">
                <IconButton color="inherit">
                  <GitHubIcon />
                </IconButton>
              </NextLink>
              <NextLink
                href="https://www.linkedin.com/in/pratama-d-59b0ba128/"
                target="_blank"
              >
                <IconButton color="inherit">
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
