import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ImagePlaceholder from '../components/ImagePlaceholder';
import ImageWithSkeleton from '../components/ImageWithSkeleton';
import { useImages } from '../context/ImageContext';

const AboutPage = () => {
  const { dbImages } = useImages();
  
  useEffect(() => {
    document.title = 'Hakkımızda | Güzellik Salonu';
  }, []);

  return (
    <div className="pt-32">
      <div className="bg-gradient-to-r from-black-900 via-black-800 to-gold-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gold-400">Hakkımızda</h1>
          <p className="text-gold-100 mt-3 text-lg max-w-2xl">
            Güzellik ve bakım alanında kalite, güven ve müşteri memnuniyetini ön planda tutuyoruz.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mb-20">
          <div className="rounded-xl overflow-hidden h-80 md:h-[450px] shadow-lg ring-1 ring-black-100">
            <ImageWithSkeleton src={dbImages?.isletmefoto2 || "/images/isletmefoto2.jpg"} alt="Salon Görseli" className="w-full h-full object-cover" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-black-900 mb-6">Biz Kimiz?</h2>
            <p className="text-lg text-black-700 leading-relaxed mb-6">
              Güzellik sektöründe yaşanan tüm gelişmeleri yakından takip eden salonumuz,
              teknolojiyi en doğru şekilde kullanarak müşterileriyle buluşmaktadır.
              Kaliteden asla ödün vermeyen güzellik salonumuz, son teknoloji cihazlarla,
              uygun fiyat politikası ve müşteri memnuniyeti odaklı hizmet vermektedir.
            </p>
            <p className="text-lg text-black-700 leading-relaxed">
              Hizmet standartlarını yüksek tutmanın yanında hizmet kalitesini de her geçen gün
              arttıran salonumuzda çalışan personelin tamamı en iyi şekilde yetişmiş,
              alanında uzman, son derece nitelikli kişilerden oluşmaktadır.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-20">
          <div className="bg-gold-50 rounded-xl p-8 ring-1 ring-gold-200">
            <div className="w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center mb-5">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-black-900 mb-4">Misyonumuz</h3>
            <p className="text-black-700 leading-relaxed">
              Her müşterimize en yüksek kalitede güzellik ve bakım hizmeti sunarak,
              kendilerini özel ve güvenilir ellerde hissetmelerini sağlamak.
              Hijyen, profesyonellik ve samimiyeti bir arada sunmak temel hedefimizdir.
            </p>
          </div>
          <div className="bg-black-900 rounded-xl p-8 text-white">
            <div className="w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center mb-5">
              <svg className="w-6 h-6 text-black-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gold-400 mb-4">Vizyonumuz</h3>
            <p className="text-gray-300 leading-relaxed">
              Bölgenin en güvenilir ve tercih edilen güzellik merkezi olmak;
              sektördeki yenilikleri takip ederek müşterilerimize her zaman
              en güncel ve etkili hizmetleri sunmaya devam etmek.
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-black-900 text-center mb-12">Neden Bizi Tercih Etmelisiniz?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Uzman Ekip', desc: 'Alanında deneyimli profesyoneller' },
              { title: 'Modern Cihazlar', desc: 'Son teknoloji ekipmanlar' },
              { title: 'Hijyenik Ortam', desc: 'Steril ve güvenli uygulama' },
              { title: 'Uygun Fiyat', desc: 'Kaliteli hizmet, erişilebilir fiyat' },
            ].map((item) => (
              <div key={item.title} className="text-center p-6 rounded-xl bg-black-50 ring-1 ring-black-100">
                <div className="w-3 h-3 bg-gold-500 rounded-full mx-auto mb-4" />
                <h4 className="font-bold text-black-900 mb-2">{item.title}</h4>
                <p className="text-sm text-black-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <Link
            to="/iletisim"
            className="inline-block bg-gradient-to-r from-gold-500 to-gold-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-gold-400 hover:to-gold-500 transition shadow-lg"
          >
            Randevu Al
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
