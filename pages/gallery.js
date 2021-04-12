import { m as motion } from 'framer-motion';
import { fetchContent } from '../utils/contentful';
import BlogPostCard from '../components/blogPostCard';
import { NextSeo } from 'next-seo';
import moment from 'moment';
import ImageGallery from 'react-image-gallery';
import Image from '../components/image';

const Home = ({ images }) => {
  console.log(images);
  return (
    <>
      <NextSeo
        title="Gallery – Jermy Abraham"
        description="Some pictures from my journey to date"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="space-y-16"
      >
        <div className="space-y-10 ">
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold mb-3">📷 Gallery</div>
            <div className=" text-sm md:text-base text-gray-500">
              Pictures from my journey to date
            </div>
          </div>
          <div className="flex flex-wrap">
            {images.map((image) => {
              return (
                <>
                  <div className=" m-2">
                    <Image
                      src={image.url}
                      width={image.width}
                      height={image.height}
                      wrapper="max-w-2xl cursor-pointer"
                      onClick={() => {
                        if (window !== undefined) {
                          window.location.href = `${image.url}`;
                        }
                      }}
                      priority
                    />
                  </div>
                </>
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
      jermyGalleryCollection(limit:100) {
        items {
          imagesCollection {
            items {
              url
              width
              height
              
            }
          }
        }
      }
    }
    `
  );

  return {
    props: {
      images: response.jermyGalleryCollection.items[0].imagesCollection.items,
    },
    revalidate: 10,
  };
}
