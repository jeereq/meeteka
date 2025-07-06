import { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface Image {
  url: string;
  caption: string;
}

interface ImageGalleryProps {
  images: Image[];
}

export function ImageGallery({ images }: ImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showLightbox, setShowLightbox] = useState(false);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="space-y-6">
      {/* Main Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative aspect-square group cursor-pointer"
            onClick={() => {
              setCurrentIndex(index);
              setShowLightbox(true);
            }}
          >
            <img
              src={image.url}
              alt={image.caption}
              className="w-full h-full object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-center justify-center">
              <p className="text-white text-center px-4">{image.caption}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {showLightbox && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
          <button
            onClick={() => setShowLightbox(false)}
            className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={previousImage}
            className="absolute left-4 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="max-w-4xl w-full mx-4">
            <div className="relative aspect-video">
              <img
                src={images[currentIndex].url}
                alt={images[currentIndex].caption}
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-white text-center mt-4">{images[currentIndex].caption}</p>
          </div>
        </div>
      )}
    </div>
  );
}