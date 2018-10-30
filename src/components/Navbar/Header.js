import React from 'react';

export default function Header({ title = 'title' }) {
  return (
    <header class="mdl-layout__header">
      <div class="mdl-layout__header-row">
        <span class="mdl-layout-title">{title}</span>

        <div class="mdl-layout-spacer" />
        <nav class="mdl-navigation mdl-layout--large-screen-only">
          <a class="mdl-navigation__link" href="">
            Link
          </a>
          <a class="mdl-navigation__link" href="">
            Link
          </a>
          <a class="mdl-navigation__link" href="">
            Link
          </a>
          <a class="mdl-navigation__link" href="">
            Link
          </a>
        </nav>
      </div>
    </header>
  );
}
