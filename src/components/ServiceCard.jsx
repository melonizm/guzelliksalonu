import { Link } from 'react-router-dom';
import ImagePlaceholder from './ImagePlaceholder';
import ImageWithSkeleton from './ImageWithSkeleton';
import { useImages } from '../context/ImageContext';

const ServiceCard = ({ service }) => {
  const { dbImages } = useImages();
  const imageUrl = (dbImages && service.dbKey && dbImages[service.dbKey]) ? dbImages[service.dbKey] : service.image;

  return (
    <div className="relative aspect-[4/3] perspective-1000 group cursor-pointer">
      <div className="relative w-full h-full transition-transform duration-700 transform-style-3d group-hover:rotate-y-180">
        {/* Ön yüz – placeholder veya yüklenen görsel */}
        <div className="absolute inset-0 backface-hidden rounded-xl overflow-hidden shadow-md ring-1 ring-black-100">
          {imageUrl ? (
            <ImageWithSkeleton
              src={imageUrl}
              alt={service.name}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          ) : (
            <ImagePlaceholder label={service.name} />
          )}
        </div>

        {/* Arka yüz */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-xl overflow-hidden shadow-xl ring-1 ring-gold-500/30">
          <div className="h-full bg-gradient-to-br from-black-900 via-black-800 to-black-900 flex flex-col items-center justify-center px-6 py-8 text-center">
            <div className="w-10 h-0.5 bg-gold-500 mb-4" />
            <h3 className="text-xl md:text-2xl font-bold text-gold-400 mb-3 leading-tight">
              {service.name}
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed mb-8 line-clamp-3 max-w-[220px]">
              {service.description}
            </p>
            <Link
              to={`/hizmet/${service.id}`}
              className="inline-flex items-center gap-2 bg-gold-500 text-black-900 px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-gold-400 transition-all shadow-md hover:shadow-lg hover:scale-105"
            >
              Daha Fazla
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
