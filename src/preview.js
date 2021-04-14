import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
// import { essayApi, competitionApi, insApi } from '../../api/api';

function Preview({
  description,
  thumbnail,
  title,
  link,
  // essayId,
  // competitionId,
  // inspireId,
}) {
  // const fetchData = async () => {
  //   if(essayId)
  // };
  // useEffect(() => {
  //   fetchData();
  // }, []);
  return (
    <Helmet>
      {/* <!-- HTML Meta Tags --> */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {/* <!-- Google / Search Engine Tags --> */}
      <meta itemProp="name" content={title} />
      <meta itemProp="description" content={description} />
      <meta itemProp="image" content={thumbnail} />
      {/* <!-- Facebook Meta Tags --> */}
      <meta property="og:url" content={link} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={thumbnail} />
      {/* <!-- Twitter Meta Tags --> */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={thumbnail} />
    </Helmet>
  );
}

export default Preview;