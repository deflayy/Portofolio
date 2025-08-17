import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../css/NavBar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation(); // cek lokasi route sekarang

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Tentukan apakah sedang di home
  const isHome = location.pathname === "/";

  return (
    <nav
      className={`navbar ${scrolled ? "scrolled" : ""} ${
        isHome ? "home-page" : "other-page"
      }`}
    >
      <div className="navbar-left">
        <div className="navbar-left">
          <span
            className="logo"
            onClick={() => (window.location.href = "/")}
            style={{ cursor: "pointer" }}
          >
            I Putu The Fly Arnawa
          </span>
        </div>
      </div>
      <div className="navbar-right">
        <Link to="/">Home</Link>
        <Link to="/certificate">Certificate</Link>
        <Link to="/project">Project</Link>
        <a
          href="https://drive.google.com/uc?export=download&id=1PCaTXkIiNoNFLYDb7_yKuUYs375Pe1IT"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
