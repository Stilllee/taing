import { Helmet } from 'react-helmet-async';

const MetaTag = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <Helmet>
      <title>{`TAING:${title}`}</title>
      <meta property="og:site_name" content="TAING" />
      <meta property="og:title" content={title} />
      <meta property="og:url" content="https://main--taingtaing.netlify.app/" />
      <meta property="og:description" content={description} />
    </Helmet>
  );
};

export default MetaTag;
