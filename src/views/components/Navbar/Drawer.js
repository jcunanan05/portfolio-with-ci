import React from 'react';

export default function Drawer({ title = 'Title', links='' }) {
  return (
    <div className="mdl-layout__drawer">
      <span className="mdl-layout-title">{title}</span>
      <nav className="mdl-navigation">
        {links}
      </nav>
    </div>
  );
}
