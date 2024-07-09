import React from 'react';
import { Link } from 'react-scroll';

const ScrollToTestButton = () => {
  return (
    <Link to="pengetesan" spy={true} smooth={true} offset={-50} duration={500} className="px-14 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 font-bold transition-transform transform hover:scale-110">
      Ayo Coba!
    </Link>
  );
};

export default ScrollToTestButton;
