export const Icon = ({ src, alt, className, color }) => {
  return (
    <div className={className} style={{ backgroundColor: color }}>
      <img src={src} alt={alt} />
    </div>
  );
};
