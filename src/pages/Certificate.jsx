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
    link: "https://drive.google.com/file/d/1cJZGfF0L6_XXs8-FkVzIestItbZG9pq5/view?usp=drive_linkhttps://www.dicoding.com/certificates/XXXXXX",
  },
  {
    id: 2,
    title: "Certified Associate in Scrum Fundamentals ",
    image: serti2,
    link: "https://drive.google.com/file/d/1dUnN6UNfNNRywyXP4t7nwYZjoFaIhd_P/view?usp=drive_link",
  },
  {
    id: 3,
    title: "Internship Web Developer (infinite learning)",
    image: serti3,
    link: "https://drive.google.com/file/d/1rvVX-iH6P8e0MWSZaFovucCLDOC7Ib1g/view?usp=drive_link",
  },
  {
    id: 4,
    title: "Independent Study Program Batch 6 on Web Development",
    image: serti4,
    link: "https://drive.google.com/file/d/1uGil3gr20ebDxyz_otE6A49_MIR7H7zd/view?usp=drive_link",
  },
  {
    id: 5,
    title: "Database Programming With SQL (Oracle Academy)",
    image: serti5,
    link: "https://drive.google.com/file/d/1NTY7xLkbDnI0JkJAe6REq44euOV3oC_n/view?usp=drive_link",
  },
  {
    id: 6,
    title: "Database Desain (Oracle Academy)",
    image: serti6,
    link: "https://www.dicoding.com/certificates/YYYYYYhttps://drive.google.com/file/d/13NmM3O6Gqf4c1EIZIxZ6-cX-Z4LwPJgn/view?usp=drive_link",
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
