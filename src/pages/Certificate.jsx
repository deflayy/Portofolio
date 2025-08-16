import React from "react";
import "../css/Certificate.css";
import serti from "../assets/serti.jpg"; // ✅ Import gambar

const certificates = [
  {
    id: 1,
    title: "Dicoding React Developer 1",
    image: serti,
    link: "https://www.dicoding.com/certificates/XXXXXX",
  },
  {
    id: 2,
    title: "Dicoding React Developer 2",
    image: serti,
    link: "https://www.dicoding.com/certificates/XXXXXX",
  },
  {
    id: 3,
    title: "Dicoding React Developer 3",
    image: serti,
    link: "https://www.dicoding.com/certificates/XXXXXX",
  },
  {
    id: 4,
    title: "Belajar Dasar Data 4",
    image: serti,
    link: "https://www.dicoding.com/certificates/YYYYYY",
  },
  {
    id: 5,
    title: "Belajar Dasar Data 4",
    image: serti,
    link: "https://www.dicoding.com/certificates/YYYYYY",
  },
  {
    id: 6,
    title: "Belajar Dasar Data 4",
    image: serti,
    link: "https://www.dicoding.com/certificates/YYYYYY",
  },
];

const Certificate = () => {
  return (
    <div className="certificate-container">
      <h1 className="title">Sertifikat Saya</h1>
      <div className="card-list">
        {certificates.map((cert) => (
          <div key={cert.id} className="card">
            <img src={cert.image} alt={cert.title} />
            <h3>{cert.title}</h3>
            <a href={cert.link} target="_blank" rel="noopener noreferrer">
              🎓 Lihat Credential
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificate;
