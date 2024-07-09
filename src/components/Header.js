// src/components/Header.js
import React from 'react';
import logo from '../asset/images/logoDiAtas.png';

const Header = () => {
  const scrollToSection = (id) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="flex flex-wrap w-full items-center justify-center gap-10 bg-transparent p-4 mt-5">
      <div className="flex w-full items-center justify-between px-32">
        <div className="flex items-center">
          <img className="w-[120px] h-[91.08px]" alt="Logo" src={logo} />
          <div className="flow-text ml-4 font-black text-[#233248] text-2xl">White Blood Cell</div>
        </div>
        <nav className="flex space-x-8">
          <button onClick={() => scrollToSection('#home')} className="nav-link text-[#1f1534] font-bold text-lg">
            Home
          </button>
          <button onClick={() => scrollToSection('#informasi')} className="nav-link text-lg">
            Informasi
          </button>
          <button onClick={() => scrollToSection('#arsitektur')} className="nav-link text-lg">
            Arsitektur
          </button>
          <button onClick={() => scrollToSection('#about-us')} className="nav-link text-lg">
            Tentang Kami
          </button>
          <button onClick={() => scrollToSection('#pengetesan')} className="nav-link text-lg">
            Pengetesan
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
