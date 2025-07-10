
import { Link } from "react-router-dom";
import { Camera, Mountain, MapPin, Palette } from "lucide-react";

const HomeView = () => {
  const portfolioSections = [
    {
      to: "/portfolio/portrait",
      icon: Camera,
      title: "Portrait Photography",
      description: "Capturing the essence and personality of individuals through intimate and expressive portraits.",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop&crop=face"
    },
    {
      to: "/portfolio/landscape", 
      icon: Mountain,
      title: "Landscape Photography",
      description: "Breathtaking natural vistas and scenic landscapes from around the world.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop"
    },
    {
      to: "/portfolio/street",
      icon: MapPin,
      title: "Street Photography", 
      description: "Candid moments and urban life captured in their natural, unposed state.",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop"
    },
    {
      to: "/portfolio/digital-art",
      icon: Palette,
      title: "Other Art",
      description: "Creative digital compositions blending photography with artistic vision and imagination.",
      image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=400&h=300&fit=crop"
    }
  ];

  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Welcome to My Portfolio
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioSections.map((section) => (
            <Link
              key={section.to}
              to={section.to}
              className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                <div className="absolute top-4 left-4 bg-white bg-opacity-90 rounded-full p-2">
                  <section.icon className="w-6 h-6 text-gray-700" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                  {section.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {section.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeView;
