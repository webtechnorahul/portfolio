import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({
  title = 'Portfolio',
  description = 'Modern portfolio website built with React and Vite.',
  name = 'MyBrand',
  type = 'website',
  canonicalUrl,
  image,
  siteName = 'MyBrand',
}) {
  const currentUrl = typeof window !== 'undefined' ? window.location.href : canonicalUrl || 'https://example.com';
  const resolvedCanonical = canonicalUrl || currentUrl;
  const pageTitle = title ? `${title} | ${siteName}` : siteName;

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={resolvedCanonical} />

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={title || siteName} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={resolvedCanonical} />
      {image && <meta property="og:image" content={image} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:title" content={title || siteName} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}
