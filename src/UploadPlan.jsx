import React, { useState } from "react";
import "./UploadPlan.css";
import Navbar from "./NavBar";

const UploadPlan = ({ onFileUpload }) => {
    const [dragActive, setDragActive] = useState(false);

    const onDragOver = (e) => {
        e.preventDefault();
        setDragActive(true);
    };

    const onDragLeave = (e) => {
        e.preventDefault();
        setDragActive(false);
    };

    const onDrop = (e) => {
        e.preventDefault();
        setDragActive(false);
        if (e.dataTransfer.files.length > 0) {
            onFileUpload(e.dataTransfer.files[0]);
        }
    };

    const onChangeFile = (e) => {
        if (e.target.files?.length > 0) {
            onFileUpload(e.target.files[0]);
        }
    };

    return (
        <>  <Navbar />
            <section className="upload-section">
                <h2 className="upload-title">Get Personalized Vastu Feedback</h2>
                <p className="upload-subtitle">
                    Upload your floor plan and receive a professional Vastu review and suggestions.
                    <strong> (Paid Service)</strong>
                </p>

                <div
                    className={`upload-dropzone ${dragActive ? "active" : ""}`}
                    onDragOver={onDragOver}
                    onDragEnter={onDragOver}
                    onDragLeave={onDragLeave}
                    onDrop={onDrop}
                >
                    <p>📂 Drag & Drop your floor plan here</p>
                    <span className="or">OR</span>

                    <label htmlFor="uploadFile" className="upload-btn">
                        Choose File
                    </label>
                    <input
                        id="uploadFile"
                        type="file"
                        accept="image/*,application/pdf"
                        className="file-input"
                        onChange={onChangeFile}
                    />

                    <p className="price-text">Upload & Get Report – <strong>₹499</strong></p>
                </div>
            </section>
        </>
    );
};

export default UploadPlan;
