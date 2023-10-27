import { Helmet } from 'react-helmet-async';

const MetaTag = ({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href?: string;
}) => {
  return (
    <Helmet>
      <title>{`TAING:${title}`}</title>
      <meta name="site_name" property="og:site_name" content="TAING" />
      <meta name="title" property="og:title" content={title} />
      <meta
        name="url"
        property="og:url"
        content="https://main--taingtaing.netlify.app/"
      />
      <meta
        name="description"
        property="og:description"
        content={description}
      />
      {href && (
        <link rel="preload" as="image" href={href} fetchPriority="high" />
      )}
    </Helmet>
  );
};

export default MetaTag;
