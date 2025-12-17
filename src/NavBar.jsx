import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "./assets/Vastu_Logo.jpg"; // adjust path if needed
import "./NavBar.css";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavClick = (e, path) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    navigate(path);
  };

  return (
    <header className={`vh-navbar ${mobileMenuOpen ? "nav-open" : ""}`}>
      <div className="container nav">
        {/* LOGO */}
        <div className="logo" onClick={() => navigate("/")}>
          <img src={Logo} alt="Vastu Home Logo" className="logo-image" />
          <span className="logo-text">Vastu Home</span>
        </div>

        {/* NAVIGATION */}
        <nav>
          <button
            className="mobile-toggle"
            aria-label="menu"
            onClick={() => setMobileMenuOpen((v) => !v)}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>

          <ul id="menu" className={mobileMenuOpen ? "open" : ""}>
            <li>
              <a onClick={(e) => handleNavClick(e, "/consultant")}>
                Vastu Consultant
              </a>
            </li>
            <li>
              <a onClick={(e) => handleNavClick(e, "/UploadPlan")}>
                Upload Floor Plan
              </a>
            </li>
            <li>
              <a onClick={(e) => handleNavClick(e, "/properties")}>
                Vastu Property
              </a>
            </li>
            <li>
              <button
                className="nav-cta"
                onClick={(e) => handleNavClick(e, "/login")}
              >
                Login / Sign Up
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
