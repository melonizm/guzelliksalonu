import { createContext, useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ImageContext = createContext(null);

export const ImageProvider = ({ children }) => {
  const [dbImages, setDbImages] = useState(null);
  const [loading, setLoading] = useState(true);
  const { slug } = useParams();

  useEffect(() => {
    setLoading(true);
    setDbImages(null);

    // Slug varsa o işletmeyi çek, yoksa ilk işletmeyi çek
    const apiUrl = slug
      ? `/api/images/${slug}`
      : `/api/images`;

    // Tarayıcı önbelleğini (cache) atlamak için URL'nin sonuna anlık timestamp ekliyoruz
    const cacheBuster = `?t=${new Date().getTime()}`;
    
    fetch(apiUrl + cacheBuster)
      .then(res => {
        if (!res.ok) throw new Error('Not found');
        return res.json();
      })
      .then(data => {
        console.log('API Response:', data);
        setDbImages(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch images from DB", err);
        setDbImages(null);
        setLoading(false);
      });
  }, [slug]);

  return (
    <ImageContext.Provider value={{ dbImages, loading, slug }}>
      {children}
    </ImageContext.Provider>
  );
};

export const useImages = () => useContext(ImageContext);
