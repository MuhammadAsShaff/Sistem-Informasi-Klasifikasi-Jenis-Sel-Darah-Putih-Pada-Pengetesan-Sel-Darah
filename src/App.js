// src/App.js
import React from 'react';
import Header from './components/Header';
import MainSection from './components/MainSection';
import InformationSection from './components/InformationSection';
import Section3 from './components/section3';
import ManfaatSel from './components/ManfaatSel';
import ManfaatWebsite from './components/ManfaatWeb';
import SectionArsitektur from './components/sectionArsitektur';
import SectionDosen from './components/sectionDosen';
import SectionPembuat from './components/SectionAnggota';
import SectionUpload from './components/sectionUpload';
import Footer from './components/Footer'; // Ensure the path matches the actual file location

const App = () => {
  return (
    <div className="App">
      <Header />
      <MainSection />
      <InformationSection />
      <Section3 />
      <ManfaatSel />
      <ManfaatWebsite />
      <SectionArsitektur />
      <SectionDosen/>
      <SectionPembuat/>
      <SectionUpload/>
      <Footer/>
    </div>
  );
};

export default App;
