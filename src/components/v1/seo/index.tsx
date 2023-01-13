/**
 * @author Groove Studio
 * @copyright © All rights reserved. Groove Studio 2023
 */

import React from "react";
import { useSiteMetadata } from "@hooks/useSiteMetadata";

interface SEOProps {
  title?: string;
  description?: string;
  pathname?: string;
  children?: any;
}

export default function SEO({
  title,
  description,
  pathname,
  children,
}: SEOProps) {
  const {
    title: defaultTitle,
    description: defaultDescription,
    image,
    siteUrl,
  } = useSiteMetadata();

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ``}`,
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <link rel="icon" href={seo.image} />
      {children}
    </>
  );
}
