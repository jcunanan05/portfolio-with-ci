import React from 'react';

export default function Hero({ title, subtitle }) {
  return (
    <header className="hero is-medium is-info is-bold">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">{title}</h1>
          <h2 className="subtitle">{subtitle}</h2>
        </div>
      </div>
    </header>
  );
}
