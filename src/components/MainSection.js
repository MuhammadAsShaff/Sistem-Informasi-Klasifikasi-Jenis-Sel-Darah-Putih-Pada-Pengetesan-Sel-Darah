import React from 'react';
import ScrollToTestButton from './ScrollToTestButton'; // Sesuaikan path sesuai struktur folder Anda
import illustration from '../asset/images/ilustarsiSehat1.png';

const MainSection = () => {
  return (
    <section id="home" className="flex items-center justify-between px-40 py-20 bg-white min-h-screen -mt-24">
      <div className="w-1/2">
        <h1 className="text-[48px] font-bold text-[#233248] mb-4 leading-tight transition-transform transform hover:scale-105">
          Klasifikasi Jenis Sel Darah <br />
          Putih Pada Pengetesan Darah
        </h1>
        <p className="text-xl text-[#1f1534] mb-6 font-light transition-opacity hover:opacity-75">
          Website ini akan membantu anda dalam klasifikasi <br />
          gambar sel darah putih manusia
        </p>
        <ScrollToTestButton />
      </div>
      <div className="w-1/2 flex justify-end">
        <img src={illustration} alt="Illustration" className="w-4/5 h-auto" />
      </div>
    </section>
  );
};

export default MainSection;
