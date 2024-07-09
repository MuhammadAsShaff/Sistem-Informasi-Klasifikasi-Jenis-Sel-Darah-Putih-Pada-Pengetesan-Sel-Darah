import React from 'react';
import mahrusImage from '../asset/images/pakMahrus.png';
import diniImage from '../asset/images/buDini.png';
import mardhiahImage from '../asset/images/buMardiah.png';
import frameworkIcon from '../asset/icon/iconFramwork.png';
import dataMiningIcon from '../asset/icon/iconDatamining.png';
import gearIcon from '../asset/icon/iconManpro.png';

const DosenCard = ({ image, name, title, titleIcon, description, alignment, link }) => {
  const isLeftAligned = alignment === 'left';

  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className={`flex flex-col md:flex-row items-center mb-8 w-full ${isLeftAligned ? 'md:flex-row-reverse' : ''}`}>
      <img src={image} alt={name} className="w-64 h-64 object-cover rounded-xl mb-4 md:mb-0 transition-transform transform hover:scale-105" />
      <div className={`flex flex-col ${isLeftAligned ? 'md:mr-8' : 'md:ml-8'} w-full`}>
        <h3 className="text-2xl font-bold mb-2 font-mulish">{name}</h3>
        <div className="flex items-center mb-2">
          <img src={titleIcon} alt={title} className="w-6 h-6 mr-2" />
          <h4 className="text-xl text-blue-500 font-semibold font-mulish">{title}</h4>
        </div>
        <p className="text-gray-600 text-justify font-mulish">{description}</p>
      </div>
    </a>
  );
};

const SectionDosen = () => {
  return (
    <div className="bg-white flex flex-col items-center justify-center w-full min-h-screen p-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold font-mulish">Dosen Pengampu</h2>
        <div className="h-0.5 w-14 bg-black rounded-full mt-4 mx-auto"></div>
      </div>
      <div className="max-w-7xl w-full">
        <DosenCard
          image={mahrusImage}
          name="Muhammad Mahrus Zain, S.S.T., M.T.I."
          title="Dosen Framework"
          titleIcon={frameworkIcon}
          description="Muhammad Mahrus Zain adalah Dosen Sistem Informasi di Politeknik Caltex Riau. Beliau berperan sebagai Koordinator Praktisi Mengajar, sebuah program kolaborasi antara akademisi dan praktisi industri untuk meningkatkan kualitas pendidikan tinggi. Beliau juga aktif dalam penelitian yang berfokus pada pengembangan sistem informasi yang inovatif dan efisien untuk meningkatkan proses bisnis dalam berbagai sektor industri. Selain itu, beliau juga sering menjadi pembicara dalam seminar dan workshop yang berkaitan dengan teknologi informasi dan manajemen proyek."
          alignment="left"
          link="https://pcr.ac.id/prodi/345/sistem-informasi/profil/7429/Muhammad-Mahrus-Zain"
        />
        <DosenCard
          image={diniImage}
          name="Dini Nurmalasari, S.T., M.T."
          title="Dosen Data Mining"
          titleIcon={dataMiningIcon}
          description="Dini Nurmalasari merupakan dosen di Politeknik Caltex Riau yang mengajar di Program Studi Teknologi Rekayasa Komputer. Beliau berkontribusi dalam program Praktisi Mengajar, berkolaborasi dengan praktisi industri untuk memberikan pendidikan yang relevan dan terkini. Beliau memiliki minat penelitian dalam bidang data mining dan machine learning, dan telah menerbitkan beberapa makalah ilmiah di jurnal internasional terkemuka. Pengalamannya dalam mengaplikasikan teknik data mining untuk berbagai kasus bisnis telah membantu mahasiswa memahami penerapan praktis dari teori yang mereka pelajari di kelas."
          alignment="right"
          link="https://pcr.ac.id/prodi/961/teknologi-rekayasa-komputer/profil/12533/Dini-Nurmalasari"
        />
        <DosenCard
          image={mardhiahImage}
          name="Mardhiah Fadli, S.T., M.T."
          title="Dosen Manajemen Proyek"
          titleIcon={gearIcon}
          description="Mardhiah Fadli adalah dosen di Politeknik Caltex Riau, mengajar di Program Studi Teknologi Rekayasa Komputer. Beliau aktif dalam program Praktisi Mengajar, yang menghubungkan akademisi dengan praktisi untuk memperkaya pengalaman belajar mahasiswa. Fokus penelitian beliau adalah pada manajemen proyek teknologi informasi dan pengembangan perangkat lunak. Dengan latar belakang yang kuat dalam rekayasa perangkat lunak dan manajemen proyek, beliau berperan penting dalam membantu mahasiswa mengembangkan keterampilan yang diperlukan untuk berhasil dalam industri teknologi informasi."
          alignment="left"
          link="https://pcr.ac.id/prodi/961/teknologi-rekayasa-komputer/profil/12577/Mardhiah-Fadli"
        />
      </div>
    </div>
  );
};

export default SectionDosen;
