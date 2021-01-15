import type { AppProps } from 'next/app';
import { ReactElement } from 'react';
import Head from 'next/head';

import '../styles/globals.css';
import Layout from '../components/common/Layout';

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return (
    <>
      <Head>
        <title>Demon Slayer Wiki</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
