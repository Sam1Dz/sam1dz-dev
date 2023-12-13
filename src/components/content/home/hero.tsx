import React from 'react';
import NextImage from 'next/image';

/* MATERIAL UI | COMPONENTS */
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

/* APP HOOKS */
import useResponsive from '@/hooks/use-responsive';

/* APP LIBS */
import GetDynamicHero, { type TDynamicHero } from '@/libs/get-dynamic-hero';

export default function HomeHero() {
  const { breakpoints } = useResponsive();

  const [heroImage, setHeroImage] = React.useState<TDynamicHero | null>(null);

  React.useEffect(() => {
    setHeroImage(GetDynamicHero());
  }, []);

  return (
    <Box component="section" sx={{ height: { xxs: 472, md: 656 } }}>
      <Box
        sx={{
          position: 'relative',
          height: '100%',
          bgcolor: '#121212',
        }}
      >
        {heroImage && (
          <NextImage
            src={heroImage.src}
            alt={heroImage.alt}
            sizes="(max-width: 600px) 100vw, 75vw"
            fill
            style={{ objectFit: 'cover', filter: 'brightness(.25)' }}
          />
        )}

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
