import { fetchContent } from '../utils/contentful';
import Hero from '../components/hero';
import BlogPostCard from '../components/blogPostCard';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import moment from 'moment';
import { m as motion } from 'framer-motion';

const Home = ({ heroData, blogPosts }) => {
  return (
    <>
      <NextSeo title="Home – Jermy Abraham" description="Basketball, Teamwork, Faith" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="space-y-16"
      >
        <Hero heroData={heroData} />

        <div className="space-y-10 ">
          <div className="text-center md:text-left">
            <h1 className="text-2xl font-bold mb-3">🧐 Recent Blog Posts</h1>
            <p className=" text-sm md:text-base text-gray-900">
              A collection of my thoughts on basketball, life, and faith
            </p>
          </div>
          {blogPosts.map(({ title, category, description, date, alt, body, slug, image }) => {
            return (
              <BlogPostCard
                key={title}
                title={title}
                description={description}
                category={category}
                alt={alt}
                date={date}
                body={body}
                slug={slug}
                priority={true}
                image={image}
              />
            );
          })}

          <Link href="/blog">
            <button className="inline-flex text-md leading-tight font-medium bg-blue-300 border-1 py-1.5 px-6 focus:outline-none hover:bg-blue-500 rounded-lg text-blue-900">
              Read more
            </button>
          </Link>
        </div>
      </motion.div>
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const response = await fetchContent(
    `
    {
      homePageJermy (id: "34q0ZeKlX9PcCqZFb2HvE0") {
        heroTitle
        heroDescription
        heroExperience
        twitter
        linkedin
        instagram
        heroImage {
          url
          width
          height
        }
      }
      postJermyCollection(limit: 3) {
        items {
          category
          description
          title
          date
          alt
          body
          slug
          image {
            url
            width
            height
          }
        }
      }
    }
    `
  );
  const adjustedResponse = response.postJermyCollection.items.map((map) => {
    map.date = moment(map.date).format('MMM DD, YYYY');
    return map;
  });

  return {
    props: {
      heroData: {
        title: response.homePageJermy.heroTitle,
        description: response.homePageJermy.heroDescription,
        experience: response.homePageJermy.heroExperience,
        twitter: response.homePageJermy.twitter,
        linkedin: response.homePageJermy.linkedin,
        instagram: response.homePageJermy.instagram,
        heroImage: response.homePageJermy.heroImage,
      },
      blogPosts: adjustedResponse,
    },
    revalidate: 10,
  };
}
