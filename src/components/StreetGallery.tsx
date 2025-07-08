
import PhotoGrid from "./PhotoGrid";

const StreetGallery = () => {
  const photos = [
    {
      id: "1",
      url: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=400&fit=crop",
      alt: "Person using MacBook Pro",
      title: "Urban Professional"
    },
    {
      id: "2",
      url: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=500&h=400&fit=crop",
      alt: "Woman with laptop",
      title: "City Life"
    },
    {
      id: "3",
      url: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&h=400&fit=crop",
      alt: "Circuit board macro",
      title: "Digital Street"
    },
    {
      id: "4",
      url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=400&fit=crop",
      alt: "Working professional",
      title: "Modern Workspace"
    },
    {
      id: "5",
      url: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=400&fit=crop",
      alt: "Technology in use",
      title: "Connected World"
    },
    {
      id: "6",
      url: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=500&h=400&fit=crop",
      alt: "Urban scene",
      title: "City Rhythm"
    }
  ];

  return (
    <PhotoGrid
      photos={photos}
      title="Street Photography"
      description="Documenting the pulse and energy of urban life. These candid moments reveal the authentic stories unfolding in the streets, capturing humanity in its most genuine form."
    />
  );
};

export default StreetGallery;
