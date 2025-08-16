import React from "react";
import { Link } from "react-router-dom";
import "../css/Home.css";
import profileImg from "../assets/ppsatu.jpg";
import bgHero from "../assets/bghome.jpg";

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <div
        className="hero-section"
        style={{
          backgroundImage: `url(${bgHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#fff",
          textAlign: "center",
          padding: "100px 20px",
        }}
      >
        <h1>Hi, I'm Deflay 👋</h1>
        <p>
          Seorang web developer dan data analyst. Saya senang membangun sesuatu
          yang <strong>berguna</strong>, <strong>efisien</strong>, dan{" "}
          <strong>berdampak</strong>.
        </p>
      </div>

      {/* About Me Section */}
      <div className="home-content">
        <div className="home-image">
          <img src={profileImg} alt="Putu" />
        </div>

        <div className="home-text">
          <h2>About Me</h2>
          <p>
            Saya memiliki passion dalam mengembangkan aplikasi web dan
            menganalisis data untuk memberikan insight yang bermanfaat.
            Mengutamakan desain yang clean dan kinerja optimal.
          </p>

          <div className="social-icons">
            <a
              href="https://www.linkedin.com/in/namaanda"
              target="_blank"
              rel="noopener noreferrer"
            >
              🔗 LinkedIn
            </a>
            <a
              href="https://www.instagram.com/namaanda"
              target="_blank"
              rel="noopener noreferrer"
            >
              📷 Instagram
            </a>
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
            >
              💬 WhatsApp
            </a>
          </div>

          <div className="hero-buttons">
            <Link to="/project" className="btn-primary">
              Lihat Proyek
            </Link>
            <Link to="/certificate" className="btn-secondary">
              Lihat Sertifikat
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
