import { Link } from 'react-router-dom';
import { useImages } from '../context/ImageContext';

const Footer = () => {
  const { dbImages } = useImages();
  return (
    <footer className="bg-gray-900 text-white">
      <div className="bg-black-900 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h3 className="text-2xl font-bold mb-2 text-gold-400">{dbImages?.isletmeAdi || "Güzellik Salonu"}</h3>
              <p className="text-gold-200">Kendinizi özel hissetmeniz için profesyonel güzellik hizmetleri</p>
            </div>
            <div className="flex justify-center items-center space-x-6">
              <a href="#" className="w-12 h-12 bg-gold-500/20 rounded-full flex items-center justify-center hover:bg-gold-500/30 transition">
                <svg className="w-6 h-6 text-gold-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="w-12 h-12 bg-gold-500/20 rounded-full flex items-center justify-center hover:bg-gold-500/30 transition">
                <svg className="w-6 h-6 text-gold-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c9-3.403-2.759-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="w-12 h-12 bg-gold-500/20 rounded-full flex items-center justify-center hover:bg-gold-500/30 transition">
                <svg className="w-6 h-6 text-gold-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
            <div>
              <Link to="/iletisim" className="inline-block bg-gold-500 text-black-900 px-6 py-3 rounded-full font-bold hover:bg-gold-400 transition">
                Randevu Al
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-lg font-bold mb-4 text-gold-400">Hakkımızda</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Güzellik sektöründe yaşanan tüm gelişmeleri yakından takip eden salonumuz, 
              teknolojiyi en doğru şekilde kullanarak müşterileriyle buluşmaktadır.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4 text-gold-400">Hızlı Linkler</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-gray-400 hover:text-gold-400 transition">Ana Sayfa</Link></li>
              <li><Link to="/hakkimizda" className="text-gray-400 hover:text-gold-400 transition">Hakkımızda</Link></li>
              <li><Link to="/#services" className="text-gray-400 hover:text-gold-400 transition">Hizmetler</Link></li>
              <li><Link to="/iletisim" className="text-gray-400 hover:text-gold-400 transition">İletişim</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4 text-gold-400">Hizmetler</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/hizmet/lazer-epilasyon" className="text-gray-400 hover:text-gold-400 transition">Lazer Epilasyon</Link></li>
              <li><Link to="/hizmet/cilt-bakimi" className="text-gray-400 hover:text-gold-400 transition">Cilt Bakımı</Link></li>
              <li><Link to="/hizmet/kas-vitamini" className="text-gray-400 hover:text-gold-400 transition">Kaş Vitamini</Link></li>
              <li><Link to="/hizmet/lifting" className="text-gray-400 hover:text-gold-400 transition">Lifting</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4 text-gold-400">İletişim</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-400">{dbImages?.adres || "Örnek Mahallesi, No: 123"}</span>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-gray-400">(0212) 123 45 67</span>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-400">info@guzelliksalonu.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} {dbImages?.isletmeAdi || "Güzellik Salonu"}. Tüm hakları saklıdır.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-gold-400 transition">Gizlilik Politikası</a>
              <a href="#" className="hover:text-gold-400 transition">Kullanım Şartları</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
