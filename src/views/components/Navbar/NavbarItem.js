import React from 'react';

export default function NavbarItem({
  href,
  className = '',
  text = '',
  onClick
}) {
  return (
    <a onClick={onClick} href={href} className={`navbar-item ${className}`}>
      {text}
    </a>
  );
}
