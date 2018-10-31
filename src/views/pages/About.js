import React from 'react';
import Grid, { Cell } from '../components/Grid';

import './About.css';

const Banner = () => (
  <Cell className="mdl-cell--12-col About__banner">
    <div>
      <h1 className="About__title">Jonathan Cunanan</h1>
      <h2 className="About__subtitle">Frontend Developer</h2>
    </div>
  </Cell>
);

const ImageOverlay = () => (
  <span className="image__overlay">
    <img
      src="/images/sand"
      alt=""
    />
  </span>
);

const ColorOverlay = () => <span className="color__overlay" />;

export default function About() {
  return (
    <section className="About" id="about">
      <Grid>
        <Banner />
      </Grid>
      <ImageOverlay />
      <ColorOverlay />
    </section>
  );
}
