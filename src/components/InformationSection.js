// src/components/InformationSection.js
import React from 'react';
import eosinophilIcon from '../asset/images/eosinophil.png';
import lymphocyteIcon from '../asset/images/lymphocyte.png';
import monocyteIcon from '../asset/images/monocyte.png';
import neutrophilIcon from '../asset/images/neutrophil.png';

const InformationSection = () => {
  return (
    <section id="informasi" className="p-16 bg-white font-mulish">
      <div className="max-w-screen-lg mx-auto">
        <h2 className="text-center text-4xl font-bold mb-6">Apa Itu Sel Darah Putih?</h2>
        <div className="label mx-auto w-10/12">
          <p className="text-wrapper text-lg font-light text-justify">
            Sel darah putih atau leukosit adalah salah satu komponen sel darah yang mengandung sedikit hemoglobin, sehingga warnanya lebih pucat. Leukosit diproduksi oleh sel induk di sumsum tulang (bone marrow), di mana sumsum itu sendiri selain memproduksi sel darah merah dan keping darah, juga memproduksi sel darah putih.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center mt-12 mx-auto w-10/12">
          <div className="w-[400px] h-[330px] p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
            <img src={eosinophilIcon} alt="Eosinophil" className="w-16 h-16 mb-4 ml-8 mr-8" />
            <h3 className="text-xl font-bold mb-2 ml-8 mr-8 hover:text-blue-500">Eosinophil</h3>
            <p className="text-gray-600 ml-8 mr-8">Sel darah putih yang berperan dalam melawan infeksi parasit dan reaksi alergi.</p>
          </div>
          <div className="w-[400px] h-[330px] p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
            <img src={lymphocyteIcon} alt="Lymphocyte" className="w-16 h-16 mb-4 ml-8 mr-8" />
            <h3 className="text-xl font-bold mb-2 ml-8 mr-8 hover:text-blue-500">Lymphocyte</h3>
            <p className="text-gray-600 ml-8 mr-8">Sel darah putih yang penting untuk respons imun dan pertahanan terhadap patogen.</p>
          </div>
          <div className="w-[400px] h-[330px] p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
            <img src={monocyteIcon} alt="Monocyte" className="w-16 h-16 mb-4 ml-8 mr-8" />
            <h3 className="text-xl font-bold mb-2 ml-8 mr-8 hover:text-blue-500">Monocyte</h3>
            <p className="text-gray-600 ml-8 mr-8">Sel darah putih yang memakan patogen dan debris selular, serta dalam respons inflamasi.</p>
          </div>
          <div className="w-[400px] h-[330px] p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
            <img src={neutrophilIcon} alt="Neutrophil" className="w-16 h-16 mb-4 ml-8 mr-8" />
            <h3 className="text-xl font-bold mb-2 ml-8 mr-8 hover:text-blue-500">Neutrophil</h3>
            <p className="text-gray-600 ml-8 mr-8">Sel darah putih yang merupakan garis pertahanan pertama dalam melawan infeksi.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InformationSection;
