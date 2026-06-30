import { createContext, useContext, useState, useEffect } from 'react';

const ImageContext = createContext(null);

export const ImageProvider = ({ children }) => {
  const [dbImages, setDbImages] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiUrl = import.meta.env.PROD 
      ? 'https://guzelliksalonu-ly3l.onrender.com/api/images'
      : '/api/images';

    // Tarayıcı önbelleğini (cache) atlamak için URL'nin sonuna anlık timestamp ekliyoruz
    const cacheBuster = `?t=${new Date().getTime()}`;
    
    fetch(apiUrl + cacheBuster)
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
