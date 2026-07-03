import { useParams } from 'react-router-dom';

/**
 * İşletme slug'ına göre link oluşturan hook.
 * Örn: slug='selin-beauty' ise useSlugLink('/iletisim') => '/selin-beauty/iletisim'
 */
export function useSlugLink() {
  const { slug } = useParams();
  
  return (path) => {
    if (!slug) return path;
    // Root path için direkt slug döndür
    if (path === '/' || path === '') return `/${slug}`;
    // Hash linkler için (#services gibi)
    if (path.startsWith('/#')) return `/${slug}${path.substring(1)}`;
    // Slash ile başlıyorsa slug ekle
    if (path.startsWith('/')) return `/${slug}${path}`;
    return `/${slug}/${path}`;
  };
}
