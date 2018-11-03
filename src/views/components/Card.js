import React from 'react';
import './Card.css';

export const CardButton = ({ text = '',href = '' }) => (
  <a
    className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    {text}
  </a>
);

export default function Card({ title, bodyText, footer, className='' }) {
  return (
    <article className={`${className} mdl-card mdl-shadow--2dp`}>
      <header className="mdl-card__title mdl-card--expand">
        <h2 className="mdl-card__title-text">{title}</h2>
      </header>
      <div className="mdl-card__supporting-text">{bodyText}</div>
      <footer className="mdl-card__actions mdl-card--border Card__footer">
        {footer}
      </footer>
    </article>
  );
}
