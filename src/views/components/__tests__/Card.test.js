import React from 'react';
import { render, cleanup } from 'react-testing-library';
import Card from '../Card';

afterEach(cleanup);

it('Content renders compound components and unmounts', () => {
  render(
    <Card>
      <Card.Content>Card Content</Card.Content>
      <Card.Footer>Card Footer</Card.Footer>
    </Card>
  );
});
