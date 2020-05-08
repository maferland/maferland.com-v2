import React from 'react';
import './progressive-image.module.scss';

const ProgressiveImage = ({ image, style = '', className = '' }) => {
  const [highResImageLoaded, setHighResImageLoaded] = React.useState(false);
  const lowResUrl = `${image.url}?nf_resize=fit&w=4`;
  const highResUrl = `${image.url}?nf_resize=fit&w=1200`;
  const handleLoad = () => setHighResImageLoaded(true);
  return (
    <div className="is-relative">
      <img style={{ ...style }} className={className} alt={image.alt} onLoad={() => handleLoad()} src={highResUrl} />
      <img
        style={{ ...style }}
        className={`${className} overlay`}
        alt={image.alt}
        {...(highResImageLoaded && { style: { opacity: '0' } })}
        src={lowResUrl}
      />
    </div>
  );
};

export default ProgressiveImage;
