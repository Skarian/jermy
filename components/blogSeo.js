import { NextSeo, ArticleJsonLd } from 'next-seo';

const BlogSeo = ({ title, description, url, alt, image, date }) => {
  const isoDate = new Date(date).toISOString();
  const featuredImage = {
    url: image.url,
    alt: alt,
  };

  return (
    <>
      <NextSeo
        title={`${title} – Jermy Abraham`}
        description={description}
        canonical={url}
        openGraph={{
          type: 'article',
          article: {
            publishedTime: isoDate,
          },
          url,
          title,
          description: description,
          images: [featuredImage],
        }}
      />
      <ArticleJsonLd
        authorName="Jermy Abraham"
        dateModified={isoDate}
        datePublished={isoDate}
        description={description}
        images={[featuredImage]}
        publisherLogo="/favicon.ico"
        publisherName="Jermy Abraham"
        title={title}
        url={url}
      />
    </>
  );
};

export default BlogSeo;
