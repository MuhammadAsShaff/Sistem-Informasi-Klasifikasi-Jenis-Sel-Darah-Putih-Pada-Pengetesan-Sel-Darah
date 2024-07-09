import React, { useState } from 'react';
import leftArrow from '../asset/icon/arrowKiri.png';
import rightArrow from '../asset/icon/arrowKanan.png';
import muhammadImage from '../asset/images/profilAcop.png';
import jehanImage from '../asset/images/fotoJehan.jpg';

const cards = [
  {
    image: muhammadImage,
    name: 'Muhammad As Shaff',
    id: '2257301088',
    quote: '“Solusi keterlibatan pasien inovatif kami memastikan Anda dapat mengakses informasi penting dengan cepat, aman, dan tanpa beban administratif yang biasa. Kesehatan Anda, disederhanakan.”',
  },
  {
    image: jehanImage,
    name: 'Jehan Anisa Humairah',
    id: '2257301061',
    quote: '“Portal web kami menyediakan pengalaman yang intuitif, efisien, dan aman, membuat akses informasi pasien menjadi lebih mudah dan lebih dapat diandalkan dari sebelumnya.”',
  },
];

const SectionPembuat = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  return (
    <div id="about-us" className="bg-white flex flex-col items-center justify-center w-full min-h-screen p-8 font-mulish">
      <div className="w-full flex flex-col items-center mb-8">
        <h2 className="text-4xl font-bold mt-4">Pembuat Website Ini</h2>
        <div className="h-0.5 w-14 bg-black rounded-full mt-2"></div>
      </div>
      <div className="w-full h-20"></div> {/* Div kosong untuk jarak */}
      <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {cards.map((card, index) => (
            <div key={index} className="w-full flex-none p-4">
              <div className="bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-xl shadow-lg p-8 h-80 transform transition-transform hover:scale-105">
                <div className="text-center mb-14">
                  <h3 className="text-2xl font-bold">Siapa Aja Sih Yang Buat Website ini?</h3>
                  <div className="h-0.5 w-14 bg-white rounded-full mt-2 mx-auto"></div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="relative">
                      <img src={card.image} alt={card.name} className="w-32 h-32 rounded-full shadow-md" />
                      <div className="absolute inset-0 rounded-full border-4 border-white"></div>
                    </div>
                    <div className="ml-12">
                      <h4 className="text-lg font-bold">{card.name}</h4>
                      <p>{card.id}</p>
                    </div>
                  </div>
                  <p className="ml-40 flex-1 text-left">{card.quote}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center mt-4">
        <button onClick={prevSlide} className={`focus:outline-none mr-4 transition-opacity duration-300 ${currentIndex === 0 ? 'opacity-50' : 'opacity-100'}`}>
          <img src={leftArrow} alt="Previous" className="w-8 h-6" />
        </button>
        <div className="flex justify-center transition-opacity duration-300">
          {cards.map((_, index) => (
            <div key={index} className={`w-2 h-2 rounded-full mx-1 transition-opacity duration-300 ${currentIndex === index ? 'bg-blue-500' : 'bg-gray-300'}`}></div>
          ))}
        </div>
        <button onClick={nextSlide} className={`focus:outline-none ml-4 transition-opacity duration-300 ${currentIndex === cards.length - 1 ? 'opacity-50' : 'opacity-100'}`}>
          <img src={rightArrow} alt="Next" className="w-8 h-6" />
        </button>
      </div>
    </div>
  );
};

export default SectionPembuat;
