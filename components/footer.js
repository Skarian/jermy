import { m as motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className=" bg-blue-300 w-full">
      <div className="select-none text-center w-full py-3 text-md leading-tight font-medium text-blue-900">
        Made with
        <motion.div whileTap={{ y: -5 }} className="inline-flex cursor-pointer px-1">
          {' '}
          ❤️{' '}
        </motion.div>
        by Neil Skaria
      </div>
    </footer>
  );
};

export default Footer;
