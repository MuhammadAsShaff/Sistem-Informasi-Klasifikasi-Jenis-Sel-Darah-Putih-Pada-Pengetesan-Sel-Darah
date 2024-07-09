import React from 'react';
import maskGroup1 from '../asset/images/tanganCard.png';
import maskGroup2 from '../asset/images/nengokMikroskop.png';
import maskGroup3 from '../asset/images/luka.png';
import frameIcon from '../asset/icon/arrow.svg';

const ManfaatSel = () => {
  return (
    <div className="bg-white flex flex-col items-center justify-center w-full min-h-screen">
      <div className="flex flex-col items-center justify-center gap-12 w-full max-w-7xl mx-auto p-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold">Manfaat Dari Sel Darah Putih Pada Manusia</h2>
          <div className="h-0.5 w-14 bg-black rounded-full mt-4 mx-auto"></div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-8">
          <div className="w-[356px] bg-white rounded-2xl shadow-lg flex flex-col h-[600px] transition-transform transform hover:scale-105">
            <img className="w-full h-60 object-cover rounded-t-2xl mb-4" alt="Mask group" src={maskGroup1} />
            <div className="px-6 py-4 flex flex-col flex-grow">
              <h3 className="text-xl font-bold mb-3 transition-colors duration-300 hover:text-blue-500">Pertahanan terhadap Infeksi Virus Yang Menyerang</h3>
              <p className="text-gray-600 mb-14">Sel darah putih melindungi tubuh dari serangan mikroorganisme berbahaya</p>
              <div className="flex items-center text-blue-500 font-semibold mt-auto mb-6">
                <a href="#" className="flex items-center hover:underline">
                  Read more <img className="ml-2 w-4 h-4" alt="Frame" src={frameIcon} />
                </a>
              </div>
            </div>
          </div>
          <div className="w-[356px] bg-white rounded-2xl shadow-lg flex flex-col h-[600px] transition-transform transform hover:scale-105">
            <img className="w-full h-60 object-cover rounded-t-2xl mb-4" alt="Mask group" src={maskGroup2} />
            <div className="px-6 py-4 flex flex-col flex-grow">
              <h3 className="text-xl font-bold mb-3 transition-colors duration-300 hover:text-blue-500">Respons Imun Tubuh Yang Terhadap Penyakit</h3>
              <p className="text-gray-600 mb-14">Membantu mengatur respons imun dengan mengenali dan mengeliminasi patogen</p>
              <div className="flex items-center text-blue-500 font-semibold mt-auto mb-6">
                <a href="#" className="flex items-center hover:underline">
                  Read more <img className="ml-2 w-4 h-4" alt="Frame" src={frameIcon} />
                </a>
              </div>
            </div>
          </div>
          <div className="w-[356px] bg-white rounded-2xl shadow-lg flex flex-col h-[600px] transition-transform transform hover:scale-105">
            <img className="w-full h-60 object-cover rounded-t-2xl mb-4" alt="Mask group" src={maskGroup3} />
            <div className="px-6 py-4 flex flex-col flex-grow">
              <h3 className="text-xl font-bold mb-3 transition-colors duration-300 hover:text-blue-500">Pemulihan Cedera Pada Manusia Terhadap Penyakit</h3>
              <p className="text-gray-600 mb-14">Membantu dalam proses penyembuhan dan pemulihan dari cedera</p>
              <div className="flex items-center text-blue-500 font-semibold mt-auto mb-6">
                <a href="#" className="flex items-center hover:underline">
                  Read more <img className="ml-2 w-4 h-4" alt="Frame" src={frameIcon} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <button className="mt-8 px-20 py-4 border-2 border-blue-500 text-blue-500 rounded-full font-bold transition duration-300 hover:bg-blue-500 hover:text-white">View all</button>
      </div>
    </div>
  );
};

export default ManfaatSel;
