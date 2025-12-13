import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const navigate = useNavigate();

    const handleNavClick = (e, path) => {
        e.preventDefault();
        navigate(path);
        setMobileMenuOpen(false);
    };

    return (
        <header className={`vh-navbar ${mobileMenuOpen ? "nav-open" : ""}`}>
            <div className="container nav">
                <div className="logo" style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
                    <span className="logo-icon">🏠</span> Vastu Home
                </div>

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
                            <a onClick={(e) => handleNavClick(e, "/consultant")}>Vastu Consultant</a>
                        </li>
                        <li>
                            <a onClick={(e) => handleNavClick(e, "/UploadPlan")}>Upload Floor Plan</a>
                        </li>
                        <li>
                            <a onClick={(e) => handleNavClick(e, "/products")}>Vastu Property</a>
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
