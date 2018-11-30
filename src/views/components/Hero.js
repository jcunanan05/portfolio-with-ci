import React from 'react';

import './Hero.css';

export default function Hero({ title, subtitle, children }) {
  return (
    <header className="Hero hero is-medium is-info is-bold">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title">{title}</h1>
          <h2 className="subtitle">{subtitle}</h2>
          {children}
        </div>
      </div>
    </header>
  );
}
