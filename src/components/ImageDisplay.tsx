// src/components/ImageDisplay.tsx
import React from 'react';

interface ImageDisplayProps {
  imageUrl: string | null;
}

const ImageDisplay: React.FC<ImageDisplayProps> = ({ imageUrl }) => {
  return (
    <div className="image-display">
      {imageUrl && <img src={imageUrl} alt="Generated" />}
    </div>
  );
};

export default ImageDisplay;