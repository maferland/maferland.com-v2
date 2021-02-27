import Head from 'next/head';

const Meta = ({ title, description, thumbnail, alt, type }) => {
  const MetaWrapper = ({ property, content }) => (
    <meta property={property} name="property" content={content} key={property} />
  );
  return (
    <Head>
      <title>{title}</title>
      {type ? <MetaWrapper property="og:type" content={type} /> : null}
      <MetaWrapper property="og:site_name" content={title} />
      <MetaWrapper property="og:title" content={title} />
      <MetaWrapper property="og:description" content={description} />
      <MetaWrapper property="og:image" content={`https://maferland.com/${thumbnail || '/img/share.png'}`} />
      <MetaWrapper property="twitter:card" content="summary" />
      <MetaWrapper property="twitter:site" content="@ma_ferland" />
      <MetaWrapper property="twitter:title" content={title} />
      <MetaWrapper property="twitter:description" content={description} />
      <MetaWrapper property="twitter:image" content={`https://maferland.com/${thumbnail || '/img/share.png'}`} />
      {alt ? <MetaWrapper property="twitter:image:alt" content={alt} /> : null}
    </Head>
  );
};

export default Meta;
