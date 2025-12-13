import React from "react";
import { useNavigate } from "react-router-dom";
import "./VastuConsultantProfile.css";   // Import CSS
import Navbar from "./NavBar";

const consultants = [
    {
        id: 1,
        name: "Dr. Rakesh Sharma",
        experience: "10+ Years Experience",
        specialty: "Residential & Commercial Vastu",
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
    },
    {
        id: 2,
        name: "Ms. Anita Verma",
        experience: "8+ Years Experience",
        specialty: "Temple & Residential Vastu",
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39",
    },
    {
        id: 3,
        name: "Shri Manoj Patel",
        experience: "12+ Years Experience",
        specialty: "Business & Office Vastu",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    },
    {
        id: 3,
        name: "Shri Manoj Patel",
        experience: "12+ Years Experience",
        specialty: "Business & Office Vastu",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    }, {
        id: 3,
        name: "Shri Manoj Patel",
        experience: "12+ Years Experience",
        specialty: "Business & Office Vastu",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    }, {
        id: 3,
        name: "Shri Manoj Patel",
        experience: "12+ Years Experience",
        specialty: "Business & Office Vastu",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    },
];

const VastuConsultantProfile = () => {
    const navigate = useNavigate();

    const openProfile = (id) => {
        navigate(`/consultant/${id}`);
    };

    return (
        <>
            <Navbar />
            <section className="consultant-hero">
                <div className="consultant-hero-content">
                    <h1>Our Verified Vastu Experts</h1>
                    <p>Guidance For Your Dream Home, Based On Ancient Vastu Principles</p>
                </div>
            </section>

            <section className="vc-container">


                <div className="vc-grid">
                    {consultants.map((c) => (
                        <div key={c.id} className="vc-card" onClick={() => openProfile(c.id)}>
                            <div className="vc-img-box">
                                <img src={c.image} alt={c.name} className="vc-img" />
                            </div>

                            <h3 className="vc-name">{c.name}</h3>
                            <p className="vc-exp">{c.experience}</p>
                            <p className="vc-special">{c.specialty}</p>

                            <div className="vc-rating">⭐ {c.rating}</div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );

};

export default VastuConsultantProfile;
