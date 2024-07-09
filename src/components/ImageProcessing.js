import React, { useState } from "react";
import axios from "axios";

export default function ImageProcessing() {
  const [predictedLabel, setPredictedLabel] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [positiveEffects, setPositiveEffects] = useState("");
  const [negativeEffects, setNegativeEffects] = useState("");
  const [uploadedFile, setUploadedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [status, setStatus] = useState("");
  const [confidence, setConfidence] = useState(""); // State untuk confidence

  const labelDescriptions = {
    0: {
      label: "Baked Potato",
      description:
        "Baked potato adalah kentang panggang yang lezat dengan bumbu dan topping.",
      ingredients: "Kentang, minyak zaitun, garam, merica, keju, krim asam.",
      positiveEffects: "Kaya akan serat, sumber vitamin C.",
      negativeEffects: "Tinggi kalori jika dikonsumsi berlebihan.",
    },
    1: {
      label: "Burger",
      description:
        "Burger adalah sandwich yang terdiri dari satu atau lebih patty daging cincang, biasanya daging sapi, ditempatkan di dalam roti yang dibelah dua.",
      ingredients: "Roti, daging sapi, keju, selada, tomat, bawang, saus.",
      positiveEffects: "Sumber protein, zat besi, dan vitamin B12.",
      negativeEffects: "Tinggi lemak jenuh dan kolesterol.",
    },
    7: {
      label: "Crispy Chicken",
      description:
        "Crispy chicken adalah hidangan ayam yang dilapisi tepung dan digoreng.",
      ingredients: "Ayam, tepung, telur, minyak goreng, bumbu.",
      positiveEffects: "Sumber protein, mengandung vitamin B6.",
      negativeEffects: "Tinggi lemak dan kalori.",
    },
    9: {
      label: "Donut",
      description:
        "Donut adalah kue berbentuk cincin yang digoreng dan biasanya diberi hiasan gula atau cokelat.",
      ingredients: "Tepung, gula, telur, mentega, minyak goreng.",
      positiveEffects: "Sumber energi cepat.",
      negativeEffects: "Tinggi gula dan kalori.",
    },
  };

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    setUploadedFile(URL.createObjectURL(file));

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post('https://dd93-34-83-132-51.ngrok-free.app/predict', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      const data = response.data;
      if (data.success) {
        setStatus("File berhasil diproses!");
        const labelData = labelDescriptions[data.label];
        if (labelData) {
          setPredictedLabel(labelData.label);
          setDescription(labelData.description);
          setIngredients(labelData.ingredients);
          setPositiveEffects(labelData.positiveEffects);
          setNegativeEffects(labelData.negativeEffects);
          setImageUrl(labelData.imageUrl);
          setConfidence(data.confidence.toFixed(2)); // Menyimpan nilai confidence dengan 2 desimal
        }
      } else {
        setStatus("File gagal diproses!");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("Terjadi kesalahan saat memproses file!");
    }
  };

  return (
    <section className="bg-[#FFF5EC] py-12" id="process">
      <div className="container mx-auto flex flex-col items-center px-4">
        <h2 className="text-3xl poppins-bold text-[#FE765E] mb-6 text-center">
          Silahkan Upload File Untuk Proses Data
        </h2>
        {/* Bagian kiri: Upload File */}
        <div className="w-full max-w-md bg-[#FE765E] p-6 rounded-lg shadow-lg mb-6">
          <h2 className="text-2xl poppins-bold text-[#FFFFFF] mb-4">
            Upload Files
          </h2>
          <input
            type="file"
            onChange={handleFileUpload}
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none"
          />

          <div id="status" className="text-sm text-[#FFFFFF] mt-2 text-center">
            {status}
          </div>
        </div>

        {/* Bagian kanan: Prediksi Label dan Deskripsi */}
        {uploadedFile && (
          <div className="w-full max-w-4xl bg-[#FE765E] p-6 rounded-lg shadow-lg mt-6">
            <div className="text-center mb-4">
              <h2 className="text-3xl poppins-bold text-[#1E174C]">RESULT</h2>
              <h3 className="text-2xl text-[#FFFFFF] poppins-bold">
                {predictedLabel}
              </h3>
            </div>
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/2 flex justify-center ">
                <img
                  src={uploadedFile}
                  alt="Uploaded"
                  className="w-96 h-96 object-cover mb-4 rounded-3xl border-4 border-[#1E174C]"
                />
              </div>
              <div className="w-full md:w-1/2 p-4">
                <div className="poppins-bold text-xl mb-2 text-center">
                  Ingredients
                </div>
                <p className="text-[#FFFFFF] text-base poppins-medium">
                  {ingredients}
                </p>
                <div className="poppins-bold text-xl mb-2 text-center mt-4">
                  Dampak Positif
                </div>
                <p className="text-[#FFFFFF] text-base poppins-medium">
                  {positiveEffects}
                </p>
                <div className="poppins-bold text-xl mb-2 text-center mt-4">
                  Dampak Negatif
                </div>
                <p className="text-[#FFFFFF] text-base poppins-medium">
                  {negativeEffects}
                </p>
                <div className="poppins-bold text-xl mb-2 text-center mt-4">
                  Akurasi
                </div>
                <p className="text-[#FFFFFF] text-base poppins-medium">
                  {confidence}%
                </p>{" "}
                {/* Menampilkan nilai confidence */}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
