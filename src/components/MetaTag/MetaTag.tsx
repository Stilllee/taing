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
      <meta property="og:site_name" content="TAING" />
      <meta property="og:title" content={title} />
      <meta property="og:url" content="https://main--taingtaing.netlify.app/" />
      <meta property="og:description" content={description} />
      {href && <link rel="preload" as="image" href={href} />}
    </Helmet>
  );
};

export default MetaTag;
