
import { Link } from "react-router-dom";
import { Camera, ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1920&h=1080&fit=crop')"
        }}
      />
      
      {/* Content */}
      <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
        <div className="mb-8">
          <Camera className="w-16 h-16 mx-auto mb-6 text-white" />
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Barrett Roman
          </h1>
          <p className="text-2xl text-gray-300 mb-8">
            Photography & Digital Art Portfolio
          </p>
        </div>
        
        <div className="mb-12">
          <p className="text-gray-300 italic text-xl">
            "Never regret anything, because at one point it was exactly what you wanted."
          </p>
        </div>
        
        <div className="space-y-4">
          <Link
            to="/portfolio"
            className="inline-flex items-center px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
          >
            View Portfolio
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
