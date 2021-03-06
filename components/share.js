const Share = ({ slug }) => {
  return (
    // <div className="text-xs md:text-sm bg-gray-200 ring-1 ring-gray-300 select-none rounded-full py-1 px-2">
    //   Share
    // </div>
    <div className="group inline-block relative">
      <button className="inline-flex items-center text-xs md:text-sm bg-blue-100 ring-1 ring-blue-200 select-none rounded-full py-1 px-2">
        <span className="mr-1">Share</span>
        <svg className="w-4 h-4" viewBox="0 0 20 20">
          <path d="M14.68,12.621c-0.9,0-1.702,0.43-2.216,1.09l-4.549-2.637c0.284-0.691,0.284-1.457,0-2.146l4.549-2.638c0.514,0.661,1.315,1.09,2.216,1.09c1.549,0,2.809-1.26,2.809-2.808c0-1.548-1.26-2.809-2.809-2.809c-1.548,0-2.808,1.26-2.808,2.809c0,0.38,0.076,0.741,0.214,1.073l-4.55,2.638c-0.515-0.661-1.316-1.09-2.217-1.09c-1.548,0-2.808,1.26-2.808,2.809s1.26,2.808,2.808,2.808c0.9,0,1.702-0.43,2.217-1.09l4.55,2.637c-0.138,0.332-0.214,0.693-0.214,1.074c0,1.549,1.26,2.809,2.808,2.809c1.549,0,2.809-1.26,2.809-2.809S16.229,12.621,14.68,12.621M14.68,2.512c1.136,0,2.06,0.923,2.06,2.06S15.815,6.63,14.68,6.63s-2.059-0.923-2.059-2.059S13.544,2.512,14.68,2.512M5.319,12.061c-1.136,0-2.06-0.924-2.06-2.06s0.923-2.059,2.06-2.059c1.135,0,2.06,0.923,2.06,2.059S6.454,12.061,5.319,12.061M14.68,17.488c-1.136,0-2.059-0.922-2.059-2.059s0.923-2.061,2.059-2.061s2.06,0.924,2.06,2.061S15.815,17.488,14.68,17.488"></path>
        </svg>
      </button>
      <ul className="absolute hidden text-gray-700 pt-1 group-hover:block">
        <li className="">
          <a
            className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap text-xs md:text-sm"
            href={`mailto:info@example.com?&subject=&body=https://coachjermy.com/blog/${slug}`}
          >
            E-Mail
          </a>
        </li>
        <li className="">
          <a
            className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap text-xs md:text-sm"
            href={`https://twitter.com/intent/tweet?url=https://www.coachjermy.com/blog/${slug}&text=Checkout%20this%20article!`}
          >
            Twitter
          </a>
        </li>
        <li className="">
          <a
            className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap text-xs md:text-sm"
            href={`https://www.linkedin.com/shareArticle?mini=true&url=https://coachjermy.com/blog/${slug}&title=&summary=Checkout this article!&source=`}
          >
            Linkedin
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Share;
