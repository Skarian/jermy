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
          'https://images.ctfassets.net/v9szi7zqf8b3/5Affmh0x47L5IZ07JbjBet/246d4cffcce41557601ff6593a1d23f0/journey-2021.jpg',
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
