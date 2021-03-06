import Link from 'next/link';

const Navi = () => {
  return (
    <header className="text-gray-700 body-font">
      <div
        className="container mx-auto flex flex-wrap px-10 py-5
      flex-col md:flex-row items-center max-w-5xl"
      >
        <Link href="/">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 group">
            <span className="ml-3 text-xl font-bold group-hover:text-gray-500">
              🏀 coachjermy.com
            </span>
          </a>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href="/">
            <a className="mr-3 md:mr-5 hover:text-gray-500">Home</a>
          </Link>
          <Link href="/about">
            <a className="mr-3 md:mr-5 hover:text-gray-500">About</a>
          </Link>
          <Link href="/blog">
            <a className="mr-3 md:mr-5 hover:text-gray-500">Blog</a>
          </Link>
          <Link href="/references">
            <a className="mr-3 md:mr-5 hover:text-gray-500">References</a>
          </Link>
          <Link href="/gallery">
            <a className="mr-3 md:mr-5 hover:text-gray-500">Gallery</a>
          </Link>
        </nav>
        <Link href="/meeting">
          <button className="inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0">
            Let's connect!
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Navi;
