import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SvcfCaseStudy from "./pages/SvcfCaseStudy";
import ShopSphereCaseStudy from "./pages/ShopSphereCaseStudy";

export default function App() {
  return (
    <div className="min-h-screen bg-ink-950">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/svcf-case-study" element={<SvcfCaseStudy />} />
        <Route path="/projects/shopsphere-case-study" element={<ShopSphereCaseStudy />} />
      </Routes>
    </div>
  );
}
