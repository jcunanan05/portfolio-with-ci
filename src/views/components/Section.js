import React from 'react';

export default function Section({ title, children, name = null }) {
  return (
    <section className="Section section" id={name}>
      <div className="container">
        <h2 className="title">{title}</h2>
        {children}
      </div>
    </section>
  );
}
