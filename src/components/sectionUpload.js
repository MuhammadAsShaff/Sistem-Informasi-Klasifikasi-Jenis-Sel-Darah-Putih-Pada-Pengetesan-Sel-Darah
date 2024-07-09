import React, { useState } from 'react';
import axios from 'axios';
import uploadImage from '../asset/images/uploadGambar.svg';
import 'tailwindcss/tailwind.css';

const SectionUpload = () => {
  const [predictedLabel, setPredictedLabel] = useState('');
  const [penjelasan, setPenjelasan] = useState('');
  const [manfaat, setManfaat] = useState('');
  const [uploadedFile, setUploadedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const [status, setStatus] = useState('');
  const [confidence, setConfidence] = useState('');
  const [artikel, setArtikel] = useState('');

  const labelDescriptions = {
    0: {
      label: 'EOSINOPHIL',
      penjelasan: 'Eosinophil adalah jenis sel darah putih yang berperan dalam melawan infeksi parasit dan reaksi alergi.',
      manfaat: 'Melawan infeksi parasit, mengatur reaksi alergi, dan menyebabkan peradangan untuk menghancurkan patogen.',
      artikel: 'https://my.clevelandclinic.org/health/articles/21111-eosinophils',
    },
    1: {
      label: 'LYMPHOCYTE',
      penjelasan: 'Lymphocyte adalah jenis sel darah putih yang berperan dalam respon imun adaptif.',
      manfaat: 'Mengidentifikasi dan menghancurkan patogen spesifik, memproduksi antibodi.',
      artikel: 'https://www.verywellhealth.com/lymphocytes-function-and-significance-5192651',
    },
    2: {
      label: 'MONOCYTE',
      penjelasan: 'Monocyte adalah jenis sel darah putih yang berperan dalam fagositosis dan respon inflamasi.',
      manfaat: 'Menghilangkan debris seluler dan patogen, mengatur respon imun.',
      artikel: 'https://www.healthline.com/health/monocytes',
    },
    3: {
      label: 'NEUTROPHIL',
      penjelasan: 'Neutrophil adalah jenis sel darah putih yang berperan sebagai garis pertahanan pertama melawan infeksi.',
      manfaat: 'Fagositosis bakteri dan fungi, melepaskan enzim antimikroba.',
      artikel: 'https://www.medicalnewstoday.com/articles/327749',
    },
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setUploadedFile(file);
    setImageUrl(URL.createObjectURL(file));
    setPredictedLabel('');
    setPenjelasan('');
    setManfaat('');
    setConfidence('');
    setStatus('');
    setArtikel('');
  };

  const handleFileUpload = async () => {
    if (uploadedFile) {
      const formData = new FormData();
      formData.append('file', uploadedFile);

      try {
        const response = await axios.post('https://bbc8-35-237-192-54.ngrok-free.app/predict', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        const data = response.data;
        if (data.success) {
          setStatus('File berhasil diproses!');
          const labelData = labelDescriptions[data.label];
          if (labelData) {
            setPredictedLabel(labelData.label);
            setPenjelasan(labelData.penjelasan);
            setManfaat(labelData.manfaat);
            setArtikel(labelData.artikel);
            setConfidence(data.confidence.toFixed(2));
          }
        } else {
          setStatus('File gagal diproses!');
        }
      } catch (error) {
        console.error('Error:', error);
        setStatus('Terjadi kesalahan saat memproses file!');
      }
    } else {
      setStatus('Silakan pilih file terlebih dahulu.');
    }
  };

  const handleClear = () => {
    setUploadedFile(null);
    setImageUrl('');
    setPredictedLabel('');
    setPenjelasan('');
    setManfaat('');
    setConfidence('');
    setStatus('');
    setArtikel('');
  };

  return (
    <section id="pengetesan" className="p-8 md:p-16 bg-white flex flex-col items-center min-h-screen">
      <div className="text-center mt-[-50px] mb-20">
        <h2 className="text-4xl font-bold mb-6 mt-8 font-mulish">
          Ayo Coba Masukkan Gambar Sel Darah Putih
          <br />
          Yang Kamu Punya!!
        </h2>
        <div className="h-0.5 w-14 bg-black rounded-full mx-auto"></div>
      </div>
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center mt-20">
        {!predictedLabel && (
          <>
            <img src={uploadImage} alt="Upload" className="w-full max-w-sm mb-6" />
            <input type="file" onChange={handleFileChange} className="hidden" id="fileInput" />
            <label htmlFor="fileInput" className="px-8 py-3 border-2 border-blue-500 text-blue-500 rounded-full font-bold transition duration-300 hover:bg-blue-500 hover:text-white cursor-pointer" title="Upload gambar sel darah putih">
              {uploadedFile ? uploadedFile.name : 'Upload Gambar'}
            </label>
            {uploadedFile && (
              <button onClick={handleFileUpload} className="mt-4 px-8 py-3 bg-blue-500 text-white rounded-full font-bold transition duration-300 hover:bg-blue-700">
                Submit
              </button>
            )}
            <div className="text-red-500 mt-2">{status}</div>
          </>
        )}

        {predictedLabel && (
          <div className="bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-3xl shadow-lg p-8 mt-6">
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/2 flex justify-center">
                <img src={imageUrl} alt="Uploaded" className="w-96 h-96 object-cover mb-4 rounded-3xl" />
              </div>
              <div className="w-full md:w-1/2 p-4">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-left">Nama Sel Darah Putih</h3>
                  <p className="text-lg">{predictedLabel}</p>
                </div>
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-left">Penjelasan</h3>
                  <p className="text-base">{penjelasan}</p>
                </div>
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-left">Manfaat Untuk Tubuh</h3>
                  <p className="text-base">{manfaat}</p>
                </div>
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-left">Artikel Terkait</h3>
                  <a href={artikel} className="text-base text-blue-200 underline" target="_blank" rel="noopener noreferrer">
                    {artikel}
                  </a>
                </div>
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-left">Akurasi</h3>
                  <p className="text-base">{confidence}%</p>
                </div>
                <button onClick={handleClear} className="mt-4 px-8 py-3 bg-white text-blue-500 rounded-full font-bold transition duration-300 hover:bg-blue-700 hover:text-white">
                  Clear
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SectionUpload;
