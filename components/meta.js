import Head from 'next/head';

const Meta = ({ title, description }) => (
  <Head>
    <title>{title}</title>
    <meta property="og:site_name" content={title} key="og:site_name" />
    <meta property="og:title" content={title} key="og:title" />
    <meta property="og:description" content={description} key="og:description" />
    <meta property="twitter:title" content={title} key="twitter:title" />
    <meta property="twitter:description" content={description} key="og:description" />
  </Head>
);

export default Meta;
