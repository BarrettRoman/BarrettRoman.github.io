
const WelcomeView = () => {
  return (
    <div className="flex items-center justify-center min-h-screen p-8">
      <div className="max-w-2xl text-center">
        <div className="mb-8">
          <img
            src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&h=300&fit=crop&crop=face"
            alt="Alex Morgan"
            className="w-48 h-48 rounded-full mx-auto mb-6 shadow-xl object-cover"
          />
        </div>
        
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to My Portfolio
        </h2>
        
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          I'm Alex Morgan, a passionate photographer and digital artist. 
          Through my lens, I capture the beauty of life's fleeting moments 
          and transform them into timeless visual stories.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Photography</h3>
            <p className="text-gray-600">
              Specializing in portrait, landscape, and street photography 
              with over 8 years of experience.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Digital Art</h3>
            <p className="text-gray-600">
              Creating unique digital compositions that blend reality 
              with imagination and artistic vision.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeView;
