import React from 'react';

import './Content.css';

export default function Content({
  className = '',
  children,
  dangerouslySetInnerHTML
}) {
  return (
    <div className={`Content ${className}`} dangerouslySetInnerHTML={dangerouslySetInnerHTML}>
      {children}
    </div>
  );
}
