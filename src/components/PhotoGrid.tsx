
import { Dialog, DialogContent, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import { X } from "lucide-react";
import { useState } from "react";

interface Photo {
  id: string;
  url: string;
  alt: string;
  title: string;
  location?: string;
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {photos.map((photo) => (
            <Dialog key={photo.id}>
              <DialogTrigger asChild>
                <div
                  className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                  onClick={() => setSelectedPhoto(photo)}
                >
                  <div className="aspect-[3/2] w-full">
                    <img
                      src={photo.url}
                      alt={photo.alt}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-end">
                    <div className="p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-lg font-semibold">{photo.title}</h3>
                      {photo.location && (
                        <p className="text-sm text-gray-200 mt-1">{photo.location}</p>
                      )}
                    </div>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-transparent border-none shadow-none">
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="relative max-w-full max-h-full border-[18px] border-white overflow-hidden shadow-2xl">
                    <img
                      src={photo.url}
                      alt={photo.alt}
                      className="max-w-full max-h-[85vh] object-contain"
                    />
                    <div className="absolute top-4 left-4 text-white bg-black bg-opacity-50 px-3 py-1 rounded">
                      <h3 className="text-xl font-semibold">{photo.title}</h3>
                      {photo.location && (
                        <p className="text-sm text-gray-200 mt-1">{photo.location}</p>
                      )}
                    </div>
                  </div>
                  <DialogClose asChild>
                    <button 
                      className="absolute top-4 right-4 text-white bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full p-2 transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </DialogClose>
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
