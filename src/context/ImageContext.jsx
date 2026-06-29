import { createContext, useContext, useState, useEffect } from 'react';

const ImageContext = createContext(null);

export const ImageProvider = ({ children }) => {
  const [dbImages, setDbImages] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/images')
      .then(res => res.json())
      .then(data => {
        setDbImages(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch images from DB", err);
        setLoading(false);
      });
  }, []);

  return (
    <ImageContext.Provider value={{ dbImages, loading }}>
      {children}
    </ImageContext.Provider>
  );
};

export const useImages = () => useContext(ImageContext);
