import type { AppProps } from 'next/app';
import { ReactElement } from 'react';
import Head from 'next/head';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return (
    <>
      <Head>
        <title>Demon Slayer Wiki</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
