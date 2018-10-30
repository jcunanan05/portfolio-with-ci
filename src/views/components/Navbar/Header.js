import React from 'react';

export default function Header({ title = 'title', links='' }) {

  return (
    <header className="mdl-layout__header">
      <div className="mdl-layout__header-row">
        <span className="mdl-layout-title">{title}</span>

        <div className="mdl-layout-spacer" />
        <nav className="mdl-navigation mdl-layout--large-screen-only">
          {links}
        </nav>
      </div>
    </header>
  );
}
