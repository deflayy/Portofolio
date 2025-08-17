import React from "react";
import "../css/Certificate.css";

// ✅ Import semua gambar sertifikat
import serti1 from "../assets/serti1.jpg";
import serti2 from "../assets/serti2.jpg";
import serti3 from "../assets/serti3.jpg";
import serti4 from "../assets/serti4.jpg";
import serti5 from "../assets/serti5.jpg";
import serti6 from "../assets/serti6.jpg";

const certificates = [
  {
    id: 1,
    title: "Software Engineer",
    image: serti1,
    link: "https://www.dicoding.com/certificates/XXXXXX",
  },
  {
    id: 2,
    title: "Certified Associate in Scrum Fundamentals ",
    image: serti2,
    link: "https://www.dicoding.com/certificates/XXXXXX",
  },
  {
    id: 3,
    title: "Internship Web Developer (infinite learning)",
    image: serti3,
    link: "https://www.dicoding.com/certificates/XXXXXX",
  },
  {
    id: 4,
    title: "Independent Study Program Batch 6 on Web Development",
    image: serti4,
    link: "https://www.dicoding.com/certificates/YYYYYY",
  },
  {
    id: 5,
    title: "Database Programming With SQL (Oracle Academy)",
    image: serti5,
    link: "https://www.dicoding.com/certificates/YYYYYY",
  },
  {
    id: 6,
    title: "Database Desain (Oracle Academy)",
    image: serti6,
    link: "https://www.dicoding.com/certificates/YYYYYY",
  },
];

const Certificate = () => {
  return (
    <div className="certificate-container">
      <h1 className="title">Sertifikat Saya</h1>
      <div className="certificate-grid">
        {certificates.map((cert) => (
          <div key={cert.id} className="certificate-card">
            <div className="image-box">
              <img src={cert.image} alt={cert.title} />
            </div>
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
