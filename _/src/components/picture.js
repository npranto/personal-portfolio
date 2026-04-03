import React from 'react';

const Picture = ({
  src,
  alt,
  srcSet,
  sizes,
  width,
  height,
  className = '',
  loading = 'lazy',
  highPriority = 'auto',
  ...restProps
}) => {
  if (!src || typeof src !== 'string' || src?.trim()?.length === 0) {
    throw new Error(
      'Please provide a valid `src` prop to <Picture /> component'
    );
  }

  if (!alt || typeof alt !== 'string' || alt?.trim()?.length === 0) {
    throw new Error(
      'Please provide a valid `alt` prop to <Picture /> component'
    );
  }

  return (
    <div
      className={`picture-component bg-gray-200 ${className}`}
      style={{ height: `${height}px`, width: `${width}px` }}
    >
      <picture>
        {/* WebP format for modern browsers */}
        <source srcSet={srcSet} type="image/webp" />

        {/* JPEG fallback for older browsers */}
        <source srcSet={srcSet} type="image/jpeg" />

        {/* fallback default image) */}
        <img
          className={`${className || ''}`}
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes={sizes}
          loading={loading}
          fetchPriority={highPriority}
          {...restProps}
        />
      </picture>
    </div>
  );
};

export default Picture;
