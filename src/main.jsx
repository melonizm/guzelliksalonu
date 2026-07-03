import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { ImageProvider } from './context/ImageContext'

import { useState, useEffect } from 'react';

// Ana sayfaya girildiğinde ilk işletmeye yönlendir
function RootRedirect() {
  const [targetSlug, setTargetSlug] = useState(null);

  useEffect(() => {
    const baseUrl = import.meta.env.DEV ? 'http://localhost:3002' : 'https://guzelliksalonu-ly3l.onrender.com';
    fetch(`${baseUrl}/api/images`)
      .then(res => res.json())
      .then(data => {
        if (data && data.slug) {
          setTargetSlug(data.slug);
        } else {
          // Fallback if no slug found or no packages exist
          setTargetSlug('demo');
        }
      })
      .catch(() => setTargetSlug('demo'));
  }, []);

  if (!targetSlug) return <div className="min-h-screen flex items-center justify-center bg-black-50 text-gold-500">Yükleniyor...</div>;

  return <Navigate to={`/${targetSlug}`} replace />;
}

// Slug ile sarmalanan App
function SlugApp() {
  return (
    <ImageProvider>
      <App />
    </ImageProvider>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Slug bazlı rotalar */}
        <Route path="/:slug/*" element={<SlugApp />} />
        {/* Ana sayfa: ilk işletmeye yönlendir */}
        <Route path="/" element={<RootRedirect />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
