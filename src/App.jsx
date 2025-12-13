import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import VastuConsultantProfile from "./VastuConsultantProfile";
import UploadPlan from "./UploadPlan";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/consultant" element={<VastuConsultantProfile />} />
        <Route path="/UploadPlan" element={<UploadPlan />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
