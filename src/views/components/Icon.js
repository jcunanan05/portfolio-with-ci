import React from 'react';

import './Icon.css';

function Icon({ className = '' }) {
  if (!className) return null;

  return <i className={`Icon ${className}`} />;
}

export function IconLink({ className = '', href = null, icon }) {
  return (
    <a
      className={`IconLink ${className}`}
      href={href}
      target="_blank noopener noreferrer"
    >
      <Icon className={icon} />
    </a>
  );
}

export default Icon;