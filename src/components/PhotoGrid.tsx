
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { X } from "lucide-react";
import { useState } from "react";

interface Photo {
  id: string;
  url: string;
  alt: string;
  title: string;
}

interface PhotoGridProps {
  photos: Photo[];
  title: string;
  description: string;
}

const PhotoGrid = ({ photos, title, description }: PhotoGridProps) => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-lg text-gray-600 max-w-3xl">{description}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo) => (
            <Dialog key={photo.id}>
              <DialogTrigger asChild>
                <div
                  className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                  onClick={() => setSelectedPhoto(photo)}
                >
                  <img
                    src={photo.url}
                    alt={photo.alt}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-end">
                    <div className="p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-lg font-semibold">{photo.title}</h3>
                    </div>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-[100vw] max-h-[100vh] w-full h-full p-0 bg-black border-none rounded-none">
                <div className="relative w-full h-full flex items-center justify-center">
                  <img
                    src={photo.url}
                    alt={photo.alt}
                    className="max-w-full max-h-full object-contain"
                  />
                  <div className="absolute top-4 left-4 text-white">
                    <h3 className="text-2xl font-semibold">{photo.title}</h3>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotoGrid;
