import React from 'react';
import { render, cleanup } from 'react-testing-library';
import Hero from '../Hero';

afterEach(cleanup);

test('Hero renders props: title, subtitle', () => {
  const props = {
    title: 'Hello World Title',
    subtitle: 'Subtitle on point!'
  }
  const { baseElement } = render(<Hero {...props} />);

  expect(baseElement.textContent).toMatch(props.title);
  expect(baseElement.textContent).toMatch(props.subtitle);
});
