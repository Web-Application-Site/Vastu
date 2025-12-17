import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import VastuConsultantProfile from "./VastuConsultantProfile";
import UploadPlan from "./UploadPlan";
import VastuReportPage from "./VastuReportPage";
import PropertyGrid from "./VastuProperty";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/consultant" element={<VastuConsultantProfile />} />
      <Route path="/UploadPlan" element={<UploadPlan />} />
      <Route path="/properties" element={<PropertyGrid />} />
      <Route path="/vastu-report" element={<VastuReportPage />} />

      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default App;
