import React from 'react';

export default function Layout({ children }) {
  return (
    <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
      {children}
    </div>
  );
}
