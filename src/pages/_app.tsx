/* REACT COOKIES */
import { CookiesProvider } from 'react-cookie';

/* MATERIAL UI */
import { AppCacheProvider } from '@mui/material-nextjs/v14-pagesRouter';

/* APP LAYOUT */
import Layout from '@/components/layout';

/* FONTS */
import '@fontsource/montserrat/300.css';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/500.css';
import '@fontsource/montserrat/700.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/ubuntu-mono/400.css';
import '@fontsource/ubuntu-mono/700.css';

/* GLOBAL CSS */
import '@/styles/globals.css';

/* TYPES */
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CookiesProvider defaultSetOptions={{ path: '/' }}>
      <AppCacheProvider {...pageProps}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AppCacheProvider>
    </CookiesProvider>
  );
}
