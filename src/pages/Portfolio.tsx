
import { Routes, Route } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import PortraitGallery from "../components/PortraitGallery";
import LandscapeGallery from "../components/LandscapeGallery";
import StreetGallery from "../components/StreetGallery";
import DigitalArtGallery from "../components/DigitalArtGallery";
import WelcomeView from "../components/WelcomeView";

const Portfolio = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <Routes>
          <Route path="/" element={<WelcomeView />} />
          <Route path="/portrait" element={<PortraitGallery />} />
          <Route path="/landscape" element={<LandscapeGallery />} />
          <Route path="/street" element={<StreetGallery />} />
          <Route path="/digital-art" element={<DigitalArtGallery />} />
        </Routes>
      </main>
    </div>
  );
};

export default Portfolio;
