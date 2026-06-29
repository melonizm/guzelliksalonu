import { useState } from 'react';

const ImageWithSkeleton = ({ src, alt, className, ...props }) => {
  const [isLoading, setIsLoading] = useState(true);

  // If no source provided, don't attempt to load image, just show skeleton or empty space.
  if (!src) return <div className={`animate-pulse bg-gray-300 ${className}`} />;

  return (
    <div className={`relative ${className}`}>
      {/* Skeleton Loading State */}
      {isLoading && (
        <div className="absolute inset-0 z-10 animate-pulse bg-gray-200" />
      )}
      
      {/* Actual Image */}
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
        onLoad={() => setIsLoading(false)}
        onError={() => setIsLoading(false)} // Fail gracefully
        {...props}
      />
    </div>
  );
};

export default ImageWithSkeleton;
