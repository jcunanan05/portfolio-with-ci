import React from 'react';
import { render, cleanup } from 'react-testing-library';
import Content from '../Content';

afterEach(cleanup);

test('Content renders content', () => {
  const content = '<p>Hello World</p>';
  const { baseElement } = render(<Content __html={content} />);

  expect(String(baseElement.innerHTML).includes(content)).toBe(true);
});
