import React from 'react';
import illustration from '../asset/images/gambarSection3.png'; // Sesuaikan path sesuai dengan lokasi file gambar Anda

const Desktop = () => {
  return (
    <div className="bg-white flex flex-col items-center justify-center w-full min-h-screen font-mulish">
      <div className="flex flex-col items-center justify-center gap-20 w-full max-w-7xl mx-auto p-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 w-full">
          <div className="w-full md:w-1/2 flex justify-start md:ml-4">
            <img className="w-full h-auto object-cover" alt="Illustration" src={illustration} />
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-start md:mr-4">
            <h2 className="text-4xl font-bold mb-4">Klasifikasi Jenis Sel Darah Putih Pada Pengetesan Darah</h2>
            <div className="h-0.5 w-14 bg-black rounded-full mb-4"></div>
            <p className="text-lg text-gray-600 text-justify mb-6">
              Website kami menyediakan platform komprehensif untuk mengedukasi pengguna tentang pentingnya klasifikasi jenis sel darah putih dalam pengetesan darah. Dengan menggabungkan informasi terkini dan alat analitik, kami membantu
              pengguna memahami peran vital yang dimainkan oleh berbagai jenis sel darah putih—seperti eosinophil, lymphocyte, monocyte, dan neutrophil—dalam diagnosis medis. Website ini menawarkan panduan interaktif, visualisasi data, dan
              sumber belajar yang memudahkan pengguna dari segala tingkat keahlian untuk mengakses dan memahami bagaimana sel darah putih berkontribusi dalam sistem kekebalan tubuh dan pengaruhnya terhadap kesehatan secara keseluruhan.
            </p>
          </div>
        </div>
        <button className="mt-8 px-20 py-4 border-2 border-blue-500 text-blue-500 rounded-full font-bold transition duration-300 hover:bg-blue-500 hover:text-white">Selengkapnya</button>
      </div>
    </div>
  );
};

export default Desktop;
