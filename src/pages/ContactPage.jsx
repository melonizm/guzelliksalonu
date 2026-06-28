import { useEffect } from 'react';
import { services } from '../data/services';

const ContactPage = () => {
  useEffect(() => {
    document.title = 'İletişim | Güzellik Salonu';
  }, []);

  return (
    <div className="pt-32">
      <div className="bg-gradient-to-r from-black-900 via-black-800 to-gold-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gold-400">Bize Ulaşın</h1>
          <p className="text-gold-100 mt-3 text-lg max-w-2xl">
            Randevu ve bilgi için hemen iletişime geçin. Size en kısa sürede dönüş yapacağız.
          </p>
        </div>
      </div>

      <section className="py-20 bg-gradient-to-r from-black-900 via-black-800 to-gold-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6">İletişim Bilgileri</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gold-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Adres</h3>
                    <p className="text-gold-100">Örnek Mahallesi, No: 123</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gold-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Telefon</h3>
                    <p className="text-gold-100">(0212) 123 45 67</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gold-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">E-posta</h3>
                    <p className="text-gold-100">info@guzelliksalonu.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gold-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Çalışma Saatleri</h3>
                    <p className="text-gold-100">Pazartesi - Cumartesi: 09:00 - 19:00</p>
                    <p className="text-gold-200 text-sm mt-1">Pazar: Kapalı</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <h2 className="text-2xl font-bold mb-6 text-black-800">Randevu Formu</h2>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-black-700 font-medium mb-2">Adınız Soyadınız</label>
                  <input
                    type="text"
                    placeholder="Adınız Soyadınız"
                    className="w-full px-4 py-3 rounded-lg border border-black-300 text-black-800 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-black-700 font-medium mb-2">Telefon Numaranız</label>
                  <input
                    type="tel"
                    placeholder="Telefon Numaranız"
                    className="w-full px-4 py-3 rounded-lg border border-black-300 text-black-800 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-black-700 font-medium mb-2">Hizmet Seçimi</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-black-300 text-black-800 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent">
                    <option value="">Hizmet Seçiniz</option>
                    {services.map((service) => (
                      <option key={service.id} value={service.id}>
                        {service.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-black-700 font-medium mb-2">Mesajınız</label>
                  <textarea
                    placeholder="Mesajınız"
                    rows="4"
                    className="w-full px-4 py-3 rounded-lg border border-black-300 text-black-800 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-gold-500 to-gold-600 text-white py-3 rounded-lg font-bold hover:from-gold-400 hover:to-gold-500 transition shadow-lg"
                >
                  Randevu Talebi Gönder
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
