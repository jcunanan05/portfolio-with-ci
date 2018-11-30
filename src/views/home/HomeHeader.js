import React from 'react';
import Hero from '../components/Hero';
import { IconLink } from '../components/Icon';

import './HomeHeader.css';

export default function Header() {
  return (
    <Hero title="Jonathan Cunanan" subtitle="Front-end Developer">
      <div className="Hero__social">
        <IconLink
          icon="fab fa-github-alt"
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
        <IconLink icon="fab fa-codepen" href="https://codepen.io/jcunanan05/" />
      </div>
    </Hero>
  );
}
