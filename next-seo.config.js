const title = 'Jermy Abraham – Basketball, Teamwork, Faith.';
const description =
  'Hi, my name is Jermy Abraham. My passion is basketball, teamwork, and developing athletic talent.';

const SEO = {
  title,
  description,
  lang: 'en',
  canonical: 'https://jermyabraham.com',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://jermyabraham.com',
    title,
    description,
    images: [
      {
        url:
          'https://images.ctfassets.net/v9szi7zqf8b3/6zDwLXqcpMgvxBR8NdM9S4/e55a0b934a708c71b9b0f5b3399abf81/banner.png',
        alt: title,
        width: 1280,
        height: 720,
      },
    ],
  },
  twitter: {
    handle: '@CoachJermy',
    site: '@CoachJermy',
    cardType: 'summary_large_image',
  },
};

export default SEO;
