import React, { useState } from "react";
import "../css/Project.css";
import sampleImg from "../assets/serti2.jpg"; // contoh gambar

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "Website pribadi yang menampilkan proyek dan sertifikat.",
    images: [sampleImg, sampleImg, sampleImg, sampleImg],
    link: "https://github.com/putu/portfolio",
  },
  {
    id: 2,
    title: "Sentiment Analysis",
    description: "Analisis sentimen ulasan pengguna menggunakan Naive Bayes.",
    images: [sampleImg, sampleImg, sampleImg, sampleImg],
    link: "https://github.com/putu/sentiment-analysis",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "Website pribadi yang menampilkan proyek dan sertifikat.",
    images: [sampleImg, sampleImg, sampleImg, sampleImg],
    link: "https://github.com/putu/portfolio",
  },
  {
    id: 4,
    title: "Sentiment Analysis",
    description: "Analisis sentimen ulasan pengguna menggunakan Naive Bayes.",
    images: [sampleImg, sampleImg, sampleImg, sampleImg],
    link: "https://github.com/putu/sentiment-analysis",
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "Website pribadi yang menampilkan proyek dan sertifikat.",
    images: [sampleImg, sampleImg, sampleImg, sampleImg],
    link: "https://github.com/putu/portfolio",
  },
  {
    id: 6,
    title: "Sentiment Analysis",
    description: "Analisis sentimen ulasan pengguna menggunakan Naive Bayes.",
    images: [sampleImg, sampleImg, sampleImg, sampleImg],
    link: "https://github.com/putu/sentiment-analysis",
  },
];

const Project = () => {
  return (
    <div className="project-container">
      <h1 className="title">Proyek Saya</h1>
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

const ProjectCard = ({ project }) => {
  const [current, setCurrent] = useState(0);
  const total = project.images.length;

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  return (
    <div className="project-card">
      {/* Slider */}
      <div className="slider">
        <img
          src={project.images[current]}
          alt={`${project.title} ${current + 1}`}
          className="slider-image"
        />
        {/* Tombol navigasi */}
        <button className="nav-btn left" onClick={prevSlide}>
          &#10094;
        </button>
        <button className="nav-btn right" onClick={nextSlide}>
          &#10095;
        </button>
      </div>

      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <a href={project.link} target="_blank" rel="noopener noreferrer">
        🚀 Show Project
      </a>
    </div>
  );
};

export default Project;
