import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="vastu-footer">
      <div className="footer-container">

        {/* Brand Label */}
        <div className="footer-brand">
          <span className="logo-icon">🏠</span>
          <span className="brand-text">Vastu Home</span>
        </div>

        {/* Social Icons */}
        <div className="footer-socials">
          <a href="#"><i className="fa-brands fa-instagram"></i></a>
          <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
          <a href="#"><i className="fa-brands fa-youtube"></i></a>
          <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
        </div>
      </div>

      <div className="footer-bottom">
        © 2025 <span>Vastu Home</span> — All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
