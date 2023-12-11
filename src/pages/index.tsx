import React from 'react';
import NextHead from 'next/head';

/* MATERIAL UI */
import { useTheme } from '@mui/material';

export default function Home() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <NextHead>
        <title>sam1dz.dev</title>
        <meta
          name="description"
          content='Halo Guys!!. sam1dz.dev adalah personal website yang dibuat dengan Next.js oleh Pratama "Sam1Dz" Dimas'
        />
        <meta
          name="theme-color"
          content={
            theme.palette.mode === 'dark'
              ? '#272727'
              : theme.palette.primary.main
          }
        />
      </NextHead>
    </React.Fragment>
  );
}
