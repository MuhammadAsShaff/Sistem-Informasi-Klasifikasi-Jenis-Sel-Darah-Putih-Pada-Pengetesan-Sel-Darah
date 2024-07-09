import React from 'react';
import reactIcon from '../asset/icon/iconReact.png'; // Update with the correct path to your image
import tailwindIcon from '../asset/icon/iconTailwind.png'; // Update with the correct path to your image
import pythonIcon from '../asset/icon/iconPython.png'; // Update with the correct path to your image
import flaskIcon from '../asset/icon/iconFlask.png'; // Update with the correct path to your image

const Card = ({ icon, title, description, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-[21px] relative mb-6 transform transition-transform hover:scale-105">
      <div className="flex w-[170px] h-[170px] items-center justify-center gap-2.5 px-5 py-[21px] relative bg-white rounded-[30px] shadow-[0px_10px_30px_#0000001a] hover:shadow-2xl">
        <img className="relative w-90 h-auto" alt={title} src={icon} />
      </div>
      <div className="inline-flex flex-col h-auto items-start relative flex-[0_0_auto]">
        <div className="relative w-fit mt-[-1.00px] font-bold font-mulish text-black text-[26px] tracking-[0] leading-[30px] whitespace-nowrap">{title}</div>
        <p className="relative w-[344px] h-auto font-light font-mulish text-[#7d7987] text-lg tracking-[0] leading-[22px]">{description}</p>
      </div>
    </a>
  );
};

const SectionArsitektur = () => {
  return (
    <div id="arsitektur" className="bg-white flex flex-col items-center justify-center w-full min-h-screen">
      <div className="flex flex-col items-center justify-center gap-24 w-full max-w-7xl mx-auto p-8">
        <div className="text-center mt-[-100px] mb-[50px]">
          <h2 className="text-4xl font-bold font-mulish">Arsitektur Pembentuk Website Ini</h2>
          <div className="h-0.5 w-14 bg-black rounded-full mt-4 mx-auto mb-12"></div>
        </div>
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 w-full">
          <div className="w-full md:w-1/2 rounded-2xl p-8">
            <h3 className="text-2xl font-bold font-mulish mb-6">Front-End</h3>
            <Card icon={reactIcon} title="React JS" description="Membangun antarmuka pengguna yang interaktif dan dinamis." link="https://reactjs.org/" />
            <Card icon={tailwindIcon} title="Tailwind CSS" description="Menyediakan styling yang konsisten, responsif, dan cepat." link="https://tailwindcss.com/" />
          </div>
          <div className="w-full md:w-1/2 bg-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold font-mulish mb-6">Back-End</h3>
            <Card icon={pythonIcon} title="Python" description="Menangani logika bisnis dan integrasi dengan model machine learning TensorFlow." link="https://www.python.org/" />
            <Card icon={flaskIcon} title="Flask" description="Mengatur routing HTTP, menyediakan API endpoints, dan mengelola respons." link="https://flask.palletsprojects.com/" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionArsitektur;
