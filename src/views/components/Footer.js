import React from 'react';
import { IconLink } from './Icon';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="Footer footer is-dark" id="footer">
      <div className="container content">
        <div className="columns">
          <div className="column">
            <h2>Social</h2>

            <IconLink
              icon="fab fa-github"
              href="https://github.com/jcunanan05"
            />
            <IconLink
              icon="fab fa-linkedin"
              href="https://www.linkedin.com/in/cunananjonathan/"
            />
            <IconLink
              icon="fab fa-free-code-camp"
              href="https://www.freecodecamp.org/jcunanan05"
            />
            <IconLink
              icon="fab fa-codepen"
              href="https://codepen.io/jcunanan05/"
            />
          </div>
          <div className="column">
            Copyright &copy; 2018 by{' '}
            <a href="https://github.com/jcunanan05">Jonathan Cunanan.</a> All
            rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
