import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/NavBar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

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

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-left">
        <span className="logo">🧠 I Putu The Fly Arnawa</span>
      </div>
      <div className="navbar-right">
        <Link to="/">Home</Link>
        <Link to="/certificate">Certificate</Link>
        <Link to="/project">Project</Link>
        <a
          href="https://drive.google.com/file/d/1uGil3gr20ebDxyz_otE6A49_MIR7H7zd/view?usp=drive_link"
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
