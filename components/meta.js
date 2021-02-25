import Head from 'next/head';

const Meta = ({ title, description, thumbnail }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta property="og:site_name" content={title} key="og:site_name" />
      <meta property="og:title" content={title} key="og:title" />
      <meta property="og:description" content={description} key="og:description" />
      <meta property="og:image" content={thumbnail || '/img/share.png'} key="og:image" />
      <meta name="twitter:card" content="summary" key="twitter:card" />
      <meta name="twitter:site" content="@ma_ferland" key="twitter:site" />
      <meta property="twitter:title" content={title} key="twitter:title" />
      <meta property="twitter:description" content={description} key="og:description" />
      <meta property="twitter:image" content={thumbnail || '/img/share.png'} key="twitter:image" />
    </Head>
  );
};

export default Meta;
