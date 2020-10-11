import 'bulma/css/bulma.css';
import Head from 'next/head';
import React from 'react';
import Meta from '../components/meta';
import '../styles/fonts.scss';
import '../styles/global.scss';
import '../styles/gradient.scss';
import '../styles/icons.scss';
import '../styles/reset.scss';

const title = 'maferland';
const description = 'A website for and by Marc-Antoine Ferland';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
        <link rel="manifest" href="/icons/site.webmanifest" />
      </Head>
      <Meta title={title} description={description} />
      <Component {...pageProps} />
    </>
  );
}
