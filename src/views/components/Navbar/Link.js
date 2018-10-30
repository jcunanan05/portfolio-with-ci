import React from 'react';

export default function Link({ href = '#', title = 'Link' }) {
  return (
    <a className="mdl-navigation__link" href={href}>
      {title}
    </a>
  );
}
