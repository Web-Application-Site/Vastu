// src/VastuHome.jsx
import React, { useState, useCallback } from 'react';
import { useNavigate } from "react-router-dom";
import './App.css'
import Navbar from './NavBar';
import Footer from './Footer';


const Home = () => {

    const navigate = useNavigate();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const scrollToId = useCallback((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, []);

    const handleNavClick = (e, path) => {
        e.preventDefault();
        navigate(path);
        setMobileMenuOpen(false); // close menu on mobile after click
    };



    const handleFiles = async (files) => {
        if (!files || !files.length) return;

        const f = files[0];
        setUploading(true);

        const formData = new FormData();
        formData.append("file", f);

        try {
            const response = await axios.post(
                "http://127.0.0.1:8000/api/floorplan/analyze/",
                formData,
                { headers: { "Content-Type": "multipart/form-data" } }
            );

            setAnalysisResult(response.data); // store backend result

        } catch (err) {
            alert("Failed to analyze plan!");
            console.error(err);
        } finally {
            setUploading(false);
        }
    };





    const onFileInputChange = (e) => {
        handleFiles(e.target.files);
    };

    const onDragOver = (e) => {
        e.preventDefault();
        e.stopPropagation();
        e.currentTarget.classList.add('drag-active');
    };

    const handelUpload = (e) => {
        scrollToId('upload')
        navigate("/UploadPlan");
    };

    const onDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        e.currentTarget.classList.remove('drag-active');
        const files = e.dataTransfer.files;
        handleFiles(files);
    };

    return (
        <div className="vh-root">
            <Navbar />
            <main className="container">
                {/* HERO */}
                <section id="home" className="hero">
                    <div className="hero-inner">
                        <h1 className="hero-title">
                            Apne Sapno Ka Ghar, <span className="highlight">Vastu</span> ke Hisaab Se ✨
                        </h1>


                        <p className="hero-sub">
                            Bring balance, energy & prosperity with guidance from verified Vastu experts.
                        </p>

                        <div className="hero-buttons">
                            <button className="hero-btn-main" onClick={() => scrollToId('experts')}>
                                🚀 Find Your Expert
                            </button>

                            <button className="hero-btn-sec" onClick={
                                handelUpload}>
                                📤 Upload Floor Plan
                            </button>
                        </div>
                    </div>
                </section>

                {/* EXPERTS */}
                <section id="experts">
                    <div className="section-title">
                        <h2>Our Verified Vastu Experts</h2>
                    </div>
                    <div className="cards-grid">
                        {/* Card 1 */}
                        <div className="card">
                            <div className="expert-top">
                                <img
                                    className="avatar"
                                    src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
                                    alt="Dr. Rakesh Sharma"
                                />
                                <div>
                                    <div className="expert-name">Dr. Rakesh Sharma</div>
                                    <div className="expert-meta">
                                        10+ Years Experience • Residential &amp; Commercial Specialist
                                    </div>
                                    <div className="rating">
                                        ⭐️⭐️⭐️⭐️☆ <span className="muted">(4.6)</span>
                                    </div>
                                </div>
                            </div>
                            <div className="expert-buttons">
                                <button className="price-btn">Video Call – ₹999</button>
                                <button className="price-btn">On-site Visit – ₹2499</button>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="card">
                            <div className="expert-top">
                                <img
                                    className="avatar"
                                    src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
                                    alt="Ms. Anita Verma"
                                />
                                <div>
                                    <div className="expert-name">Ms. Anita Verma</div>
                                    <div className="expert-meta">
                                        8+ Years Experience • Temple &amp; Residential Vastu
                                    </div>
                                    <div className="rating">
                                        ⭐️⭐️⭐️⭐️☆ <span className="muted">(4.5)</span>
                                    </div>
                                </div>
                            </div>
                            <div className="expert-buttons">
                                <button className="price-btn">Video Call – ₹799</button>
                                <button className="price-btn">On-site Visit – ₹1999</button>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="card">
                            <div className="expert-top">
                                <img
                                    className="avatar"
                                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
                                    alt="Shri Manoj Patel"
                                />
                                <div>
                                    <div className="expert-name">Shri Manoj Patel</div>
                                    <div className="expert-meta">
                                        12+ Years Experience • Business &amp; Office Vastu
                                    </div>
                                    <div className="rating">
                                        ⭐️⭐️⭐️⭐️⭐️ <span className="muted">(4.8)</span>
                                    </div>
                                </div>
                            </div>
                            <div className="expert-buttons">
                                <button className="price-btn">Video Call – ₹1299</button>
                                <button className="price-btn">On-site Visit – ₹2999</button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* WHY VASTU HOME */}
                <section id="about">
                    <div className="section-title">
                        <h2>Why Vastu Home?</h2>
                    </div>
                    <div className="features">
                        <div className="feature">
                            <div className="icon">✔</div>
                            <div>
                                <strong>Verified Experts You Can Trust</strong>
                                <div className="muted">Background checks and verified testimonials.</div>
                            </div>
                        </div>
                        <div className="feature">
                            <div className="icon">📞</div>
                            <div>
                                <strong>Easy Booking – Video or Physical Meet</strong>
                                <div className="muted">Transparent pricing and secure payments.</div>
                            </div>
                        </div>
                        <div className="feature">
                            <div className="icon">⚙️</div>
                            <div>
                                <strong>Belief Meets Technology</strong>
                                <div className="muted">
                                    Modern UX with time-honored Vastu principles.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* UPLOAD PLAN */}
                {/* <section id="upload">
                    <div className="section-title">
                        <h2>Get Personalized Vastu Feedback</h2>
                    </div>
                    <p>
                        Upload your floor plan and receive a professional Vastu review and suggestions.
                        (Paid Service)
                    </p>
                    <div className="upload-box">
                        <div
                            className="drag-area"
                            onDragOver={onDragOver}
                            onDragEnter={onDragOver}
                            onDragLeave={onDragLeave}
                            onDrop={onDrop}
                        >
                            <p className="muted">Drag &amp; drop your floor plan here, or</p>
                            <label className="btn-primary file-label" htmlFor="fileUpload">
                                Choose File
                            </label>
                            <input
                                id="fileUpload"
                                className="file-input"
                                type="file"
                                accept="image/*,application/pdf"
                                onChange={onFileInputChange}
                            />
                            <div className="muted">Upload Plan &amp; Get Feedback ₹499</div>
                        </div>
                    </div>
                </section> */}

                {/* PRODUCTS */}
                <section id="products">
                    <div className="section-title">
                        <h2>Shop Trusted Vastu Remedies</h2>
                    </div>
                    <div className="products-grid">
                        <div className="product">
                            <img
                                src="https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                                alt="Vastu Pyramid"
                            />
                            <div>
                                <strong>Vastu Pyramid</strong>
                            </div>
                            <div className="muted">₹499</div>
                            <button className="btn-primary">Buy Now</button>
                        </div>

                        <div className="product">
                            <img
                                src="https://images.unsplash.com/photo-1533038590840-1cde6e668a91?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                                alt="Healing Crystal"
                            />
                            <div>
                                <strong>Healing Crystal</strong>
                            </div>
                            <div className="muted">₹299</div>
                            <button className="btn-primary">Buy Now</button>
                        </div>

                        <div className="product">
                            <img
                                src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                                alt="Wind Chime"
                            />
                            <div>
                                <strong>Wind Chime</strong>
                            </div>
                            <div className="muted">₹799</div>
                            <button className="btn-primary">Buy Now</button>
                        </div>

                        <div className="product">
                            <img
                                src="https://images.unsplash.com/photo-1531930870731-2a30f1a1a2b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                                alt="Copper Yantra"
                            />
                            <div>
                                <strong>Copper Yantra</strong>
                            </div>
                            <div className="muted">₹1299</div>
                            <button className="btn-primary">Buy Now</button>
                        </div>
                    </div>
                </section>

                {/* Dummy sections for anchors (contact/login) */}
                <section id="contact" style={{ padding: '24px 0' }}>
                    {/* You can replace this with real contact form later */}
                </section>
                <section id="login" style={{ padding: '24px 0' }}>
                    {/* You can replace this with real login/signup later */}
                </section>
            </main>

            {/* FOOTER */}
            <Footer />

        </div>
    );
};

export default Home;

