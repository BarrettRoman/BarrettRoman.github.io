
import PhotoGrid from "./PhotoGrid";

const PortraitGallery = () => {
  const photos = [
    {
      id: "1",
      url: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=500&h=400&fit=crop&crop=face",
      alt: "Portrait of woman with laptop",
      title: "Creative Professional",
      location: "San Francisco, CA"
    },
    {
      id: "2",
      url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=400&fit=crop&crop=face",
      alt: "Woman working on laptop",
      title: "Focused Mind",
      location: "New York, NY"
    },
    {
      id: "3",
      url: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=400&fit=crop&crop=face",
      alt: "Person using MacBook Pro",
      title: "Digital Native",
      location: "Seattle, WA"
    },
    {
      id: "4",
      url: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=500&h=400&fit=crop",
      alt: "Orange tabby cat portrait",
      title: "Feline Grace",
      location: "Home Studio"
    },
    {
      id: "5",
      url: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=500&h=400&fit=crop",
      alt: "Brown ox portrait",
      title: "Mountain Spirit",
      location: "Montana Ranch"
    },
    {
      id: "6",
      url: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&h=400&fit=crop",
      alt: "Abstract circuit board",
      title: "Digital Soul",
      location: "Tech Lab Series"
    }
  ];

  return (
    <PhotoGrid
      photos={photos}
      title="Portrait Photography"
      description="Capturing the essence and personality of my subjects through intimate and expressive portraiture. Each image tells a unique story of the individual behind the lens."
    />
  );
};

export default PortraitGallery;
