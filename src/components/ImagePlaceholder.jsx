const ImagePlaceholder = ({ label = 'Resim', className = '' }) => {
  return (
    <div
      className={`w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-black-100 via-black-50 to-gold-100 border border-black-200 ${className}`}
      role="img"
      aria-label={label}
    >
      <div className="w-14 h-14 mb-3 rounded-full bg-white/80 border border-black-200 flex items-center justify-center shadow-sm">
        <svg
          className="w-7 h-7 text-black-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      </div>
      <span className="text-sm font-medium text-black-500 tracking-wide">{label}</span>
    </div>
  );
};

export default ImagePlaceholder;
