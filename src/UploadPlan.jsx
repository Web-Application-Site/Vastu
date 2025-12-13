import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./UploadPlan.css";
import Navbar from "./NavBar";

const UploadPlan = () => {
    const [dragActive, setDragActive] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const uploadFile = async (file) => {
        debugger
        setLoading(true);

        const formData = new FormData();
        formData.append("file", file);

        try {
            const res = await fetch("https://vastubackend-qafq.onrender.com/api/floorplan/analyze/", {
                method: "POST",
                body: formData
            });

            const data = await res.json();

            if (!res.ok) {
                alert(data.error || "Upload failed");
                setLoading(false);
                return;
            }

            // 👉 Navigate to report page with response data
            navigate("/vastu-report", { state: { report: data } });

        } catch (err) {
            alert("Server error");
        } finally {
            setLoading(false);
        }
    };

    const onDrop = (e) => {
        e.preventDefault();
        setDragActive(false);
        if (e.dataTransfer.files.length > 0) {
            uploadFile(e.dataTransfer.files[0]);
        }
    };

    const onChangeFile = (e) => {
        debugger
        if (e.target.files?.length > 0) {
            uploadFile(e.target.files[0]);
        }
    };

    return (
        <>
            <Navbar />
            <section className="upload-section">
                <h2 className="upload-title">Get Personalized Vastu Feedback</h2>

                <div
                    className={`upload-dropzone ${dragActive ? "active" : ""}`}
                    onDragOver={(e) => { e.preventDefault(); setDragActive(true); }}
                    onDragLeave={() => setDragActive(false)}
                    onDrop={onDrop}
                >
                    <p>📂 Drag & Drop your floor plan here</p>
                    <span className="or">OR</span>

                    <label htmlFor="uploadFile" className="upload-btn">
                        {loading ? "Uploading..." : "Choose File"}
                    </label>

                    <input
                        id="uploadFile"
                        type="file"
                        accept="image/*"
                        className="file-input"
                        onChange={onChangeFile}
                        disabled={loading}
                    />

                    <p className="price-text">
                        Upload & Get Report – <strong>₹499</strong>
                    </p>
                </div>
            </section>
        </>
    );
};

export default UploadPlan;
