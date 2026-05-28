import { Helmet } from 'react-helmet-async';
import { pageMeta, twitterCards, openGraph, companySchema, faqSchema, articleSchema, brandKnowledgeGraph } from '../data/seo';

interface MetaHeadProps {
  page: keyof typeof pageMeta;
}

export default function MetaHead({ page }: MetaHeadProps) {
  const meta = pageMeta[page];

  return (
    <Helmet>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <meta name="keywords" content={meta.keywords} />
      <meta name="author" content={meta.author || '深圳市搜客科技有限公司'} />
      <meta name="robots" content={meta.robots || 'index, follow'} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="theme-color" content="#03045e" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
      {meta.canonical && <link rel="canonical" href={meta.canonical} />}
      
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      
      <meta property="og:type" content={openGraph.type} />
      <meta property="og:site_name" content={openGraph.site_name} />
      <meta property="og:url" content={meta.canonical} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:image" content={openGraph.image} />
      <meta property="og:image:width" content={openGraph.image_width} />
      <meta property="og:image:height" content={openGraph.image_height} />
      <meta property="og:locale" content={openGraph.locale} />
      
      <meta name="twitter:card" content={twitterCards.card} />
      <meta name="twitter:site" content={twitterCards.site} />
      <meta name="twitter:creator" content={twitterCards.creator} />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={twitterCards.image} />
      
      <script type="application/ld+json">
        {JSON.stringify(companySchema)}
      </script>
      
      {page === 'home' && (
        <>
          <script type="application/ld+json">
            {JSON.stringify(faqSchema)}
          </script>
          <script type="application/ld+json">
            {JSON.stringify(brandKnowledgeGraph)}
          </script>
        </>
      )}
      
      {page === 'geo' && (
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      )}
    </Helmet>
  );
}
