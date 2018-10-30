import React from 'react';

export default function Layout({ children }) {
  return (
    <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
      {children}
    </div>
  );
}
