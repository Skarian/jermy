import { m as motion } from 'framer-motion';
import { InlineWidget } from 'react-calendly';
import { NextSeo } from 'next-seo';

const Meeting = () => {
  return (
    <>
      <NextSeo
        title="Meet Me – Jermy Abraham"
        description="Setup some time on my calendar for us to chat"
      />
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <div className="h-auto">
          <InlineWidget
            url="https://calendly.com/jermy-abraham/30min"
            styles={{ height: '110vh', overflow: 'hidden' }}
          />
        </div>
      </motion.div>
    </>
  );
};

export default Meeting;
