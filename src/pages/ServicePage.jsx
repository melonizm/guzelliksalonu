import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { services } from '../data/services';
import ImagePlaceholder from '../components/ImagePlaceholder';
import ImageWithSkeleton from '../components/ImageWithSkeleton';
import { useImages } from '../context/ImageContext';

const ServicePage = () => {
  const { id } = useParams();
  const service = services.find(s => s.id === id);
  const { dbImages } = useImages();
  
  const imageUrl = (dbImages && service?.dbKey && dbImages[service.dbKey]) ? dbImages[service.dbKey] : service?.image;

  useEffect(() => {
    document.title = service
      ? `${service.name} | Güzellik Salonu`
      : 'Hizmet Bulunamadı | Güzellik Salonu';
  }, [service]);

  if (!service) {
    return (
      <div className="pt-32 pb-20 container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold mb-4 text-black-900">Hizmet Bulunamadı</h1>
        <Link to="/" className="text-gold-600 hover:text-gold-700 font-medium">
          Ana Sayfaya Dön
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-32">
      <div className="bg-gradient-to-r from-black-900 via-black-800 to-gold-600 text-white py-16">
        <div className="container mx-auto px-4">
          <Link to="/#services" className="text-gold-200 hover:text-gold-100 text-sm mb-4 inline-block">
            ← Hizmetlerimize Dön
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gold-400">{service.name}</h1>
          <p className="text-gold-100 mt-3 text-lg">{service.description}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-xl overflow-hidden h-64 md:h-96 mb-10 shadow-lg ring-1 ring-black-100">
            {imageUrl ? (
              <ImageWithSkeleton
                src={imageUrl}
                alt={service.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <ImagePlaceholder label={service.name} />
            )}
          </div>

          <h2 className="text-3xl font-bold mb-6 text-black-900">Hizmet Hakkında</h2>
          <p className="text-lg text-black-700 leading-relaxed mb-6">
            {service.fullDescription}
          </p>
          <p className="text-lg text-black-700 leading-relaxed mb-10">
            {service.details}
          </p>

          <div className="bg-gold-50 rounded-xl p-8 mb-10">
            <h3 className="text-xl font-bold mb-5 text-black-900">Bu Hizmetin Avantajları</h3>
            <ul className="space-y-3">
              {service.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start text-black-700">
                  <span className="text-gold-600 mr-3 mt-1">✓</span>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/iletisim"
              className="inline-block text-center bg-gradient-to-r from-gold-500 to-gold-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-gold-400 hover:to-gold-500 transition shadow-lg"
            >
              Randevu Al
            </Link>
            <Link
              to="/#services"
              className="inline-block text-center border-2 border-gold-500 text-gold-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gold-50 transition"
            >
              Diğer Hizmetler
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
