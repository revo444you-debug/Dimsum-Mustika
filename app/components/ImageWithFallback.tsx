'use client';

import { useState } from 'react';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  fallbackEmoji: string;
  className?: string;
}

export default function ImageWithFallback({ src, alt, fallbackEmoji, className }: ImageWithFallbackProps) {
  const [error, setError] = useState(false);

  if (error) {
    return <div className="text-6xl">{fallbackEmoji}</div>;
  }

  return (
    <img 
      src={src} 
      alt={alt} 
      className={className}
      onError={() => setError(true)}
    />
  );
}
