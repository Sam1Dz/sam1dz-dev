import { Html, Head, Main, NextScript } from 'next/document';

/* MATERIAL UI */
import {
  DocumentHeadTags,
  documentGetInitialProps,
} from '@mui/material-nextjs/v14-pagesRouter';

/* TYPES */
import type { DocumentProps } from 'next/document';
import type { DocumentHeadTagsProps } from '@mui/material-nextjs/v14-pagesRouter';

export default function Document(props: DocumentProps & DocumentHeadTagsProps) {
  return (
    <Html lang="id">
      <Head>
        <DocumentHeadTags {...props} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

Document.getInitialProps = documentGetInitialProps;
