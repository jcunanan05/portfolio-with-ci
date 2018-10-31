import React from 'react';
import Grid, { Cell } from '../components/Grid';

import './Banner.css';

const Hero = () => (
  <Cell className="mdl-cell--12-col Banner__hero">
    <div className="titles">
      <h1 className="Banner__title">Jonathan Cunanan</h1>
      <h2 className="Banner__subtitle">Frontend Developer</h2>
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

export default function Banner() {
  return (
    <section className="Banner" id="banner">
      <Grid>
        <Hero />
      </Grid>
      <ImageOverlay />
      <ColorOverlay />
    </section>
  );
}
