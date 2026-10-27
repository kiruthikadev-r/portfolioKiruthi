import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SvcfCaseStudy from "./pages/SvcfCaseStudy";
import ShopSphereCaseStudy from "./pages/ShopSphereCaseStudy";
import NizhalCaseStudy from "./pages/NizhalCaseStudy";
import C2cCaseStudy from "./pages/C2cCaseStudy";
import AnnexCaseStudy from "./pages/AnnexCaseStudy";

export default function App() {
  return (
    <div className="min-h-screen bg-ink-950">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/svcf-case-study" element={<SvcfCaseStudy />} />
        <Route path="/projects/shopsphere-case-study" element={<ShopSphereCaseStudy />} />
        <Route path="/projects/nizhal-case-study" element={<NizhalCaseStudy />} />
        <Route path="/projects/c2c-case-study" element={<C2cCaseStudy />} />
        <Route path="/projects/annex-case-study" element={<AnnexCaseStudy />} />
      </Routes>
    </div>
  );
}
