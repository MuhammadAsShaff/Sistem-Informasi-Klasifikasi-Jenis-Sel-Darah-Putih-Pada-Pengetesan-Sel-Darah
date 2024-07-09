import React from 'react';
import { Link } from 'react-scroll';
import groupIcon from '../asset/images/logoFix.svg'; // Update with the correct path to your image

const Footer = () => {
  return (
    <footer className="flex items-center justify-around gap-6 p-10 bg-gradient-to-b from-blue-400 to-blue-600 text-white">
      <div className="flex flex-col items-start">
        <div className="flex items-center mb-4">
          <img src={groupIcon} alt="Group" className="w-12 h-12 mr-2" />
          <h3 className="text-2xl font-black">White Blood Cell</h3>
        </div>
        <p className="text-lg font-light mb-4">Terimakasi banyak sudah menggunakan website kami, semoga website kami bermanfaat untuk kalian semuaa.</p>
        <p className="text-base font-light">©Kelompok 2 Yang Selalu Semangat</p>
      </div>
      <div className="flex flex-col items-start">
        <h3 className="text-xl font-bold mb-2">Fitur Tersedia</h3>
        <Link to="home" spy={true} smooth={true} offset={-50} duration={500} className="text-lg font-normal mb-2 cursor-pointer">
          Home
        </Link>
        <Link to="informasi" spy={true} smooth={true} offset={-50} duration={500} className="text-lg font-normal mb-2 cursor-pointer">
          Informasi
        </Link>
        <Link to="arsitektur" spy={true} smooth={true} offset={-50} duration={500} className="text-lg font-normal mb-2 cursor-pointer">
          Arsitektur
        </Link>
        <Link to="about-us" spy={true} smooth={true} offset={-50} duration={500} className="text-lg font-normal mb-2 cursor-pointer">
         Tentang Kami
        </Link>
        <Link to="pengetesan" spy={true} smooth={true} offset={-50} duration={500} className="text-lg font-normal mb-2 cursor-pointer">
          Pengetesan
        </Link>
      </div>
      <div className="flex flex-col items-start">
        <h3 className="text-xl font-bold mb-2">Segmentasi</h3>
        <p className="text-lg font-light mb-2">Siswa</p>
        <p className="text-lg font-light mb-2">Mahasiswa Medis</p>
        <p className="text-lg font-light mb-2">Orang Awam</p>
        <p className="text-lg font-light mb-2">Orang Yang Pengen Tau</p>
        <p className="text-lg font-light">Orang Yang Lagi Cari tau</p>
      </div>
    </footer>
  );
};

export default Footer;
