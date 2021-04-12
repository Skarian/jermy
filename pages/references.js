import { m as motion } from 'framer-motion';
import { fetchContent } from '../utils/contentful';
import BlogPostCard from '../components/blogPostCard';
import { NextSeo } from 'next-seo';
import moment from 'moment';
import Image from '../components/image';

const Home = ({ references }) => {
  return (
    <>
      <NextSeo
        title="References – Jermy Abraham"
        description="A list of my mentors whom I have worked with"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="space-y-16"
      >
        <div className="space-y-10">
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold mb-3">👍 References</div>
            <div className=" text-sm md:text-base text-gray-500">
              A list of relevant references and mentors
            </div>
          </div>
          <div className="flex flex-wrap justify-center">
            {references.map(({ name, position, image, school }) => {
              return (
                <motion.div
                  className="flex md:flex-row flex-col bg-white rounded-xl ring-1 ring-gray-200 shadow-sm overflow-hidden mt-5 select-none hover:ring-blue-500 md:w-3/4"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex">
                    <Image
                      className="rounded-lg"
                      src={image.url}
                      wrapper="max-w-lg md:w-60"
                      width={600}
                      height={600}
                      priority
                      objectFit="cover"
                    />
                  </div>

                  <div className="px-8 py-6 flex flex-col justify-center">
                    <h2 className="text-2xl font-bold mb-6">{name}</h2>

                    <p className="text-lg text-gray-900 ">{position}</p>
                    <p className="text-gray-800">{school}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
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
      jermyReferencesCollection(order: position_DESC, limit: 100) {
        items {
          name
          position
          school
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

  return {
    props: {
      references: response.jermyReferencesCollection.items,
    },
    revalidate: 10,
  };
}
