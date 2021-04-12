const title = 'Jermy Abraham – Basketball, Teamwork, Faith.';
const description =
  'Hi, my name is Jermy Abraham. My passion is basketball, teamwork, and developing athletic talent.';

const SEO = {
  title,
  description,
  lang: 'en',
  canonical: 'https://coachjermy.com',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://coachjermy.com',
    title,
    description,
    images: [
      {
        url:
          'https://images.ctfassets.net/v9szi7zqf8b3/5D93xjws1TplniI6AhnDRc/35b5c25afecb4522cafb5ec32a8068cf/Screen_Shot_2020-03-21_at_12.25.46_AM.png',
        alt: title,
        width: 1031,
        height: 660,
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
