import { useState } from 'react';
import { Link } from 'react-router-dom';
import { services } from '../data/services';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="bg-black-900 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (0212) 123 45 67
            </span>
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              info@guzelliksalonu.com
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <a href="#" className="hover:text-gold-400 transition">Facebook</a>
            <a href="#" className="hover:text-gold-400 transition">Instagram</a>
          </div>
        </div>
      </div>
      
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-3xl font-bold text-black-900 hover:text-gold-600 transition">
            Güzellik Salonu
          </Link>
          
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-black-800 hover:text-gold-600 font-medium transition">ANASAYFA</Link>
            
            <div className="relative group">
              <button className="text-black-800 hover:text-gold-600 font-medium transition flex items-center">
                KURUMSAL
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2">
                <Link to="/hakkimizda" className="block px-4 py-2 text-black-700 hover:bg-gold-50 hover:text-gold-600 transition">Hakkımızda</Link>
                <Link to="/hakkimizda" className="block px-4 py-2 text-black-700 hover:bg-gold-50 hover:text-gold-600 transition">Misyon & Vizyon</Link>
              </div>
            </div>

            <div className="relative group">
              <button className="text-black-800 hover:text-gold-600 font-medium transition flex items-center">
                HİZMETLER
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-80 bg-white shadow-lg rounded-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2 max-h-96 overflow-y-auto">
                {services.map(service => (
                  <Link 
                    key={service.id}
                    to={`/hizmet/${service.id}`}
                    className="block px-4 py-2 text-black-700 hover:bg-gold-50 hover:text-gold-600 transition"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link to="/iletisim" className="text-black-800 hover:text-gold-600 font-medium transition">İLETİŞİM</Link>
            
            <Link to="/iletisim" className="bg-gold-500 text-white px-6 py-2 rounded-full hover:bg-gold-400 transition font-medium">
              Randevu Al
            </Link>
          </div>

          <button 
            className="md:hidden text-black-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-3 pb-4">
            <Link to="/" className="block text-black-800 hover:text-gold-600 font-medium py-2" onClick={() => setIsMenuOpen(false)}>ANASAYFA</Link>
            <Link to="/hakkimizda" className="block text-black-800 hover:text-gold-600 font-medium py-2" onClick={() => setIsMenuOpen(false)}>HAKKIMIZDA</Link>
            <Link to="/#services" className="block text-black-800 hover:text-gold-600 font-medium py-2" onClick={() => setIsMenuOpen(false)}>HİZMETLER</Link>
            <Link to="/iletisim" className="block text-black-800 hover:text-gold-600 font-medium py-2" onClick={() => setIsMenuOpen(false)}>İLETİŞİM</Link>
            <Link to="/iletisim" className="block bg-gold-500 text-white px-6 py-2 rounded-full text-center font-medium" onClick={() => setIsMenuOpen(false)}>Randevu Al</Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
