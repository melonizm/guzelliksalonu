import { Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ServiceCard from './components/ServiceCard';
import { services } from './data/services';
import ServicePage from './pages/ServicePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import { useImages } from './context/ImageContext';
import { useLocation } from 'react-router-dom';
import ImageWithSkeleton from './components/ImageWithSkeleton';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const { dbImages } = useImages();

  useEffect(() => {
    if (dbImages) {
      if (dbImages.isletmeAdi) {
        document.title = dbImages.isletmeAdi;
      }
      if (dbImages.favicon) {
        let link = document.querySelector("link[rel~='icon']");
        if (!link) {
          link = document.createElement('link');
          link.rel = 'icon';
          document.getElementsByTagName('head')[0].appendChild(link);
        }
        link.href = dbImages.favicon;
      }
    }
  }, [dbImages]);
  
  // Safe defaults if dbImages is not loaded yet
  const img1 = dbImages?.isletmefoto1 || '/images/isletmefoto1.webp';
  const img2 = dbImages?.isletmefoto2 || '/images/isletmefoto2.jpg';
  const img3 = dbImages?.isletmefoto3 || '/images/isletmefoto3.jpg';
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      title: 'Bizimle Kendinizi Özel Hissedin',
      subtitle: 'Cilt Bakımı İçin Doğru Adres',
      description: 'Güzellik sektöründe yaşanan tüm gelişmeleri yakından takip eden salonumuz, teknolojiyi en doğru şekilde kullanarak müşterileriyle buluşmaktadır.'
    },
    {
      title: 'Profesyonel Güzellik Hizmetleri',
      subtitle: 'Kalite ve Güvenin Adresi',
      description: 'Son teknoloji cihazlarımız ve uzman ekibimizle size en iyi güzellik hizmetlerini sunuyoruz.'
    },
    {
      title: 'Kendinizi Şımartın',
      subtitle: 'Lüks ve Konfor Bir Arada',
      description: 'Hijyenik ortamımızda, uygun fiyat politikamızla kendinizi özel hissedeceğiniz deneyim yaşayın.'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };
  const HomePage = () => (
    <>
      <section id="home" className="pt-32 pb-12 px-4 md:px-8 max-w-screen-2xl mx-auto">
        <div className="relative h-[80vh] md:h-[600px] bg-black-900 overflow-hidden rounded-3xl shadow-2xl">
          {/* Hero arka plan – işletme fotoğrafları */}
          <div className="absolute inset-0">
            <div
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${currentSlide === 0 ? 'opacity-100' : 'opacity-0'}`}
              style={{ backgroundImage: `url('${img1}')` }}
            />
            <div
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${currentSlide === 1 ? 'opacity-100' : 'opacity-0'}`}
              style={{ backgroundImage: `url('${img2}')` }}
            />
            <div
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${currentSlide === 2 ? 'opacity-100' : 'opacity-0'}`}
              style={{ backgroundImage: `url('${img3}')` }}
            />
            <div className="absolute inset-0 bg-black/60" /> {/* Metinlerin okunabilirliği için koyu katman */}
          </div>

          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-8 h-8 md:w-12 md:h-12 bg-gold-500/80 hover:bg-gold-500 text-white rounded-full flex items-center justify-center transition z-20"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-8 h-8 md:w-12 md:h-12 bg-gold-500/80 hover:bg-gold-500 text-white rounded-full flex items-center justify-center transition z-20"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Slide Indicators */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition ${
                  currentSlide === index ? 'bg-gold-500' : 'bg-white/50'
                }`}
              />
            ))}
          </div>

          {/* Content */}
          <div className="container mx-auto px-10 md:px-4 py-16 md:py-24 relative z-10 h-full flex items-center">
            <div className="max-w-4xl mx-auto text-center mt-8 md:mt-0">
              <h1 
                className="font-heading text-3xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight text-gold-400 transition-opacity duration-500 px-2"
                style={{ textShadow: '-1.5px -1.5px 0 #000, 1.5px -1.5px 0 #000, -1.5px 1.5px 0 #000, 1.5px 1.5px 0 #000' }}
              >
                {slides[currentSlide].title}
              </h1>
              <p 
                className="text-xl md:text-2xl lg:text-3xl mb-8 md:mb-10 text-gold-200 font-bold transition-opacity duration-500"
                style={{ textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000' }}
              >
                {slides[currentSlide].subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                <Link
                  to="/iletisim"
                  className="inline-block bg-gold-500 text-black-900 px-6 py-3 md:px-8 md:py-4 rounded-full font-bold text-base md:text-lg hover:bg-gold-400 transition transform hover:scale-105 shadow-lg"
                >
                  Bize Ulaşın
                </Link>
                <a
                  href="#services"
                  className="inline-block bg-gold-500 text-black-900 px-6 py-3 md:px-8 md:py-4 rounded-full font-bold text-base md:text-lg hover:bg-gold-400 transition transform hover:scale-105 shadow-lg"
                >
                  Hizmetlerimiz
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="rounded-xl overflow-hidden shadow-2xl h-80 md:h-[450px]">
              <ImageWithSkeleton src={img1} alt="Salonumuz" className="w-full h-full object-cover" />
            </div>
            <div>
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-black-900">Hakkımızda</h2>
              <p className="text-lg text-black-700 leading-relaxed mb-6">
                Güzellik sektöründe yaşanan tüm gelişmeleri yakından takip eden salonumuz,
                teknolojiyi en doğru şekilde kullanarak müşterileriyle buluşmaktadır.
                Kaliteden asla ödün vermeyen güzellik salonumuz, son teknoloji cihazlarla,
                uygun fiyat politikası ve müşteri memnuniyeti odaklı hizmet vermektedir.
              </p>
              <Link
                to="/hakkimizda"
                className="inline-block bg-gold-500 text-black-900 px-8 py-3 rounded-full font-bold text-lg hover:bg-gold-400 transition shadow-lg"
              >
                Daha Fazla Bilgi
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-black-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-black-900">Hizmetlerimiz</h2>
            <p className="text-lg text-black-600 max-w-2xl mx-auto">
              Profesyonel ekibimizle size en iyi güzellik hizmetlerini sunuyoruz
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>
    </>
  );

  return (
    <div className="min-h-screen">
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hakkimizda" element={<AboutPage />} />
        <Route path="/iletisim" element={<ContactPage />} />
        <Route path="/hizmet/:id" element={<ServicePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App
