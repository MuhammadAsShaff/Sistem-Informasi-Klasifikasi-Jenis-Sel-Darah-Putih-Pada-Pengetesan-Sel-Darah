import React, { useState } from 'react';
import illustration from '../asset/images/gambarManfaatWeb.png'; // Sesuaikan path sesuai dengan lokasi file gambar Anda
import arrowDown from '../asset/icon/iconDrop.png'; // Path ke icon arrow down
import arrowUp from '../asset/icon/iconUp.png'; // Path ke icon arrow up

const ManfaatWebsite = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const manfaat = ['Memahami Fungsi Sel Darah Putih', 'Identifikasi Kondisi Kesehatan', 'Pendekatan Terhadap Pengobatan', 'Memantau Respons Terhadap Terapi', 'Peningkatan Pengetahuan Medis'];

  const manfaatContent = [
    'Dengan memahami fungsi sel darah putih melalui klasifikasi yang tepat, kita dapat mengidentifikasi bagaimana tubuh melawan infeksi dan penyakit.',
    'Identifikasi kondisi kesehatan menjadi lebih mudah dengan klasifikasi sel darah putih, memungkinkan deteksi dini penyakit seperti infeksi bakteri atau virus, gangguan autoimun, dan jenis kanker tertentu.',
    'Pendekatan terhadap pengobatan dapat disesuaikan berdasarkan jenis sel darah putih yang dominan, sehingga memberikan perawatan yang lebih efektif dan tepat sasaran.',
    'Memantau respons terhadap terapi menjadi lebih efisien dengan klasifikasi sel darah putih, membantu dokter menilai efektivitas pengobatan dan membuat penyesuaian yang diperlukan.',
    'Peningkatan pengetahuan medis tentang peran sel darah putih dalam sistem kekebalan tubuh memberikan wawasan yang lebih baik kepada praktisi medis dan peneliti, mendukung inovasi dalam perawatan kesehatan.',
  ];

  return (
    <div className="bg-white flex flex-col items-center justify-center w-full min-h-screen font-mulish">
      <div className="flex flex-col items-center justify-center gap-12 w-full max-w-7xl mx-auto p-12">
        <div className="text-center mt-[-150px] mb-[50px]">
          <h2 className="text-4xl font-bold">Manfaat Website Ini</h2>
          <h2 className="text-4xl font-bold">Klasifikasi Jenis Sel Darah Putih Pada Pengetesan Darah</h2>
          <div className="h-0.5 w-14 bg-black rounded-full mt-4 mx-auto mb-12"></div>
        </div>
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 w-full">
          <div className="w-full md:w-[35%] bg-white rounded-2xl shadow-lg px-8 pt-8 pb-4 md:ml-[-50px] md:mr-[-50px]">
            {manfaat.map((item, index) => (
              <div key={index} className="mb-12">
                <div className="flex justify-between items-center cursor-pointer transition-transform duration-300 hover:scale-105" onClick={() => handleToggle(index)}>
                  <p className="text-xl font-medium leading-tight break-words mr-4">{item}</p>
                  <img src={activeIndex === index ? arrowUp : arrowDown} alt="arrow icon" className={`w-6 h-6 transform transition-transform duration-300 hover:scale-125`} />
                </div>
                <div className={`overflow-hidden transition-max-height duration-500 ease-in-out ${activeIndex === index ? 'max-h-40' : 'max-h-0'}`}>
                  {activeIndex === index && <div className="mt-4 text-gray-600">{manfaatContent[index]}</div>}
                </div>
              </div>
            ))}
          </div>
          <div className="w-full md:w-1/2 flex justify-center md:ml-[-50px] md:mr-[-50px]">
            <img className="w-full h-auto object-cover" alt="Illustration" src={illustration} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManfaatWebsite;
