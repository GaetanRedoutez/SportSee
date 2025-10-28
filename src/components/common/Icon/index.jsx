/**
 * A reusable Icon component that displays an image inside a styled container.
 *
 * @param {Object} props - The props object.
 * @param {string} props.src - The source URL of the image.
 * @param {string} props.alt - The alternative text for the image.
 * @param {string} [props.className] - Optional CSS class name for the container.
 * @param {string} [props.color] - Optional background color for the container.
 * @returns {JSX.Element} The rendered Icon component.
 */
export const Icon = ({ src, alt, className, color }) => {
  return (
    <div className={className} style={{ backgroundColor: color }}>
      <img src={src} alt={alt} />
    </div>
  );
};
