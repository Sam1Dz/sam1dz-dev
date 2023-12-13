import NextImage from 'next/image';

/* MATERIAL UI | COMPONENTS */
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

/* APP HOOKS */
import useResponsive from '@/hooks/use-responsive';

export default function HomeHero() {
  const { breakpoints } = useResponsive();

  return (
    <Box component="section" sx={{ height: { xxs: 472, md: 656 } }}>
      <Box
        sx={{
          position: 'relative',
          height: '100%',
        }}
      >
        <NextImage
          src="/images/hero_1.jpg"
          alt="Hero Image 1"
          sizes="(max-width: 600px) 100vw, 50vw"
          fill
          style={{ objectFit: 'cover', filter: 'brightness(.25)' }}
        />

        <Box
          sx={{
            mx: 'auto',
            height: '100%',
            width: 'fit-content',
            display: 'flex',
            position: 'inherit',
            alignItems: 'center',
            color: '#fff',
            zIndex: 1,
          }}
        >
          <Box>
            <Typography
              component="h1"
              variant={breakpoints.sm ? 'h1' : 'h3'}
              sx={{ fontFamily: 'Ubuntu Mono', textAlign: 'center' }}
            >
              sam1dz.dev
            </Typography>
            <Typography
              component="p"
              variant={breakpoints.md ? 'body1' : 'body2'}
              sx={{ textAlign: 'center' }}
            >
              Pratama &quot;Sam1Dz&quot; Dimas personal website
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
