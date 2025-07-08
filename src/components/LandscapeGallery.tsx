
import PhotoGrid from "./PhotoGrid";

const LandscapeGallery = () => {
  const photos = [
    {
      id: "1",
      url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=500&h=400&fit=crop",
      alt: "Foggy mountain summit",
      title: "Misty Peaks"
    },
    {
      id: "2",
      url: "https://images.unsplash.com/photo-1458668383970-8ddd3927deed?w=500&h=400&fit=crop",
      alt: "Mountain alps landscape",
      title: "Alpine Glory"
    },
    {
      id: "3",
      url: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=500&h=400&fit=crop",
      alt: "Ocean wave at beach",
      title: "Endless Horizon"
    },
    {
      id: "4",
      url: "https://images.unsplash.com/photo-1518877593221-1f28583780b4?w=500&h=400&fit=crop",
      alt: "Humpback whale jumping",
      title: "Ocean's Giant"
    },
    {
      id: "5",
      url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=500&h=400&fit=crop",
      alt: "Mountain landscape",
      title: "Silent Majesty"
    },
    {
      id: "6",
      url: "https://images.unsplash.com/photo-1458668383970-8ddd3927deed?w=500&h=400&fit=crop",
      alt: "Alpine scenery",
      title: "Nature's Cathedral"
    }
  ];

  return (
    <PhotoGrid
      photos={photos}
      title="Landscape Photography"
      description="Exploring the natural world's breathtaking beauty, from serene mountain vistas to dramatic seascapes. Each photograph captures the raw power and tranquil moments of our planet."
    />
  );
};

export default LandscapeGallery;
