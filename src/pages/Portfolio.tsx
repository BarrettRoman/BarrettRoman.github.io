
import { Routes, Route } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "../components/AppSidebar";
import PortraitGallery from "../components/PortraitGallery";
import LandscapeGallery from "../components/LandscapeGallery";
import StreetGallery from "../components/StreetGallery";
import DigitalArtGallery from "../components/DigitalArtGallery";
import HomeView from "../components/HomeView";

const Portfolio = () => {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-gray-50">
        <AppSidebar />
        <div className="flex-1 flex flex-col">
          <header className="h-12 flex items-center border-b bg-white px-4">
            <SidebarTrigger />
            <h1 className="ml-4 text-lg font-semibold">Barrett Roman Portfolio</h1>
          </header>
          <main className="flex-1 overflow-auto">
            <Routes>
              <Route path="/" element={<HomeView />} />
              <Route path="/portrait" element={<PortraitGallery />} />
              <Route path="/landscape" element={<LandscapeGallery />} />
              <Route path="/street" element={<StreetGallery />} />
              <Route path="/digital-art" element={<DigitalArtGallery />} />
            </Routes>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Portfolio;
