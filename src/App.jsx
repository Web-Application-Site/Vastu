import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import VastuConsultantProfile from "./VastuConsultantProfile";
import UploadPlan from "./UploadPlan";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/consultant" element={<VastuConsultantProfile />} />
      <Route path="/UploadPlan" element={<UploadPlan />} />

      {/* fallback route */}
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default App;
