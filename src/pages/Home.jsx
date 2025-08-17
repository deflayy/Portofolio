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
            Saya <b>I Putu The Fly Arnawa</b>, Fresh Graduate Sistem Informasi
            dari Universitas Mercu Buana dengan ketertarikan besar pada{" "}
            <b>Data Analysis</b> dan <b>Web Development</b>. Terampil
            menggunakan SQL dan Python untuk mengolah data, serta berpengalaman
            membangun website modern dengan HTML, CSS, JavaScript, dan React
            Vite.
            <br />
            <br />
            Saya menguasai proses data cleaning, transformation, dan exploratory
            data analysis (EDA), serta terbiasa membuat visualisasi interaktif
            menggunakan Tableau, Power BI, dan Google Looker Studio. Selain itu,
            pengalaman sebagai Web Developer & UI/UX Designer di Infinite
            Learning Indonesia memperkuat kemampuan saya dalam membangun
            aplikasi web yang responsif dan ramah pengguna.
            <br />
            <br />
            Dengan perpaduan keahlian di bidang data dan web, saya berkomitmen
            menghadirkan insight yang aplikatif melalui dashboard maupun website
            interaktif untuk mendukung pengambilan keputusan yang lebih baik.
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
