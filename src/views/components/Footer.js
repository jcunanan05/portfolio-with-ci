import React from 'react';

import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer is-dark" id="footer">
      <div className="container content">
        <div className="columns">
          <div className="column">
            <h2>Social</h2>

            <a href="/#home">Hello Link</a>
          </div>
          <div className="column">
            Copyright &copy; 2018 by Jonathan Cunanan. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
