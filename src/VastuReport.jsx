import React from "react";
import "./VastuReport.css";
import Navbar from "./NavBar";

const VastuReport = ({ data }) => {
    if (!data) return null;

    const { image_url, analysis } = data;
    const { score, grade, observations, recommendations } = analysis;

    return (
        <>
            <Navbar />

            <div className="vastu-report-container">
                {/* Header */}

                <div className="vastu-header">
                    <h2>🧿 Vastu Analysis Report</h2>
                    <span className={`vastu-grade ${grade.toLowerCase()}`}>
                        {grade}
                    </span>
                </div>

                {/* Image */}
                <div className="vastu-image">
                    <img src={image_url} alt="Floor Plan" />
                </div>

                {/* Score */}
                <div className="vastu-score">
                    <div className="score-circle">
                        <span>{score}</span>
                        <small>/100</small>
                    </div>
                    <p>Overall Vastu Score</p>
                </div>

                {/* Observations */}
                <div className="vastu-section warning">
                    <h3>⚠️ Observations</h3>
                    <ul>
                        {observations.map((item, idx) => (
                            <li key={idx}>{item}</li>
                        ))}
                    </ul>
                </div>

                {/* Recommendations */}
                <div className="vastu-section success">
                    <h3>✅ Recommendations</h3>
                    <ul>
                        {recommendations.map((item, idx) => (
                            <li key={idx}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default VastuReport;
