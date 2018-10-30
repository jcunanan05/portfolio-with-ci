import React from 'react';

export function Cell({ className, children }) {
  return <div className={`mdl-cell ${className}`}>{children}</div>;
}

export default function Grid({ className, children }) {
  return <div className={`mdl-grid ${className}`}>{children}</div>;
}
