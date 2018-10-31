import React from 'react';

import './Icon.css';

export default function Icon({ className = '', href = '' }) {
  if (href === '') return <i className={`Icon ${className}`} />;
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <i className={`Icon ${className}`} />
    </a>
  )
}