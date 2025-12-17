import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./NavBar";
import "./VastuProperty.css";

const properties = [
  {
    id: 1,
    title: "Luxury Villa",
    location: "Pune, Maharashtra",
    price: "₹1.2 Cr",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
  },
  {
    id: 2,
    title: "Modern Apartment",
    location: "Mumbai",
    price: "₹85 Lakh",
    image: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c",
  },
  {
    id: 3,
    title: "Independent House",
    location: "Nagpur",
    price: "₹65 Lakh",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
  },
  {
    id: 4,
    title: "Commercial Space",
    location: "Bangalore",
    price: "₹2.1 Cr",
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156",
  },
];

const PropertyGrid = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="consultant-hero">
        <div style={{ textAlign: "center" }} className="consultant-hero-content">
          <h1>Vastu Approved Properties</h1>
          <p>Find Homes Designed With Positive Energy</p>
        </div>
      </section>

      {/* GRID */}
      <section className="property-container">
        <div className="property-grid">
          {properties.map((p) => (
            <div
              key={p.id}
              className="property-card"
              onClick={() => navigate(`/property/${p.id}`)}
            >
              <img src={p.image} alt={p.title} />

              <div className="property-info">
                <h3>{p.title}</h3>
                <p>{p.location}</p>
                <span>{p.price}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default PropertyGrid;
