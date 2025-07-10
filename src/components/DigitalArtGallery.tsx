
import PhotoGrid from "./PhotoGrid";

const DigitalArtGallery = () => {
  const photos = [
    {
      id: "1",
      url: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&h=400&fit=crop",
      alt: "Circuit board art",
      title: "Digital Neurons",
      location: "Studio Collection"
    },
    {
      id: "2",
      url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=500&h=400&fit=crop",
      alt: "Abstract mountain",
      title: "Ethereal Peaks",
      location: "Digital Manipulation Series"
    },
    {
      id: "3",
      url: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=500&h=400&fit=crop",
      alt: "Ocean waves abstract",
      title: "Liquid Dreams",
      location: "Conceptual Art Series"
    },
    {
      id: "4",
      url: "https://images.unsplash.com/photo-1458668383970-8ddd3927deed?w=500&h=400&fit=crop",
      alt: "Mountain digital art",
      title: "Pixel Mountains",
      location: "Abstract Landscapes"
    },
    {
      id: "5",
      url: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=500&h=400&fit=crop",
      alt: "Cat digital art",
      title: "Digital Feline",
      location: "Pet Portrait Reimagined"
    },
    {
      id: "6",
      url: "https://images.unsplash.com/photo-1518877593221-1f28583780b4?w=500&h=400&fit=crop",
      alt: "Whale digital art",
      title: "Cyber Ocean",
      location: "Marine Life Series"
    }
  ];

  return (
    <PhotoGrid
      photos={photos}
      title="Other Art"
      description="Blending photography with digital creativity to create unique artistic visions. These pieces explore the intersection of reality and imagination through digital manipulation and artistic interpretation."
    />
  );
};

export default DigitalArtGallery;
