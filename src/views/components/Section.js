import React from 'react';

export default function Section({ title, children }) {
  return (
    <section className="section">
      <div className="container">
        <h2 className="title">{title}</h2>
        {children}
      </div>
    </section>
  );
}
