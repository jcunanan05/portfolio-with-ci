import React from 'react';

import './Container.css';

export default function Container({ className = '', children }) {
  return <div className={`Container ${className}`}>{children}</div>;
}
