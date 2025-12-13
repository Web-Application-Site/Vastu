import { useLocation, useNavigate } from "react-router-dom";
import VastuReport from "./VastuReport";

const VastuReportPage = () => {
    const { state } = useLocation();
    const navigate = useNavigate();

    if (!state?.report) {
        return (
            <div style={{ textAlign: "center", marginTop: "50px" }}>
                <p>No report found</p>
                <button onClick={() => navigate("/UploadPlan")}>
                    Upload Again
                </button>
            </div>
        );
    }

    return <VastuReport data={state.report} />;
};

export default VastuReportPage;
