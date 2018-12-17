import React from 'react';

export default function Section({ title, children, className, name = null }) {
  return (
    <section className={`Section section ${className}`} id={name}>
      <div className="container">
        <h2 className="title">{title}</h2>
        {children}
      </div>
    </section>
  );
}
