import React from 'react';
import { render, cleanup } from 'react-testing-library';
import Section from '../Section';

afterEach(cleanup);

test('Section renders title, and children', () => {
  const props = {
    title: 'Sample Title'
  };
  const children = 'Children';
  const { baseElement } = render(<Section {...props}>{children}</Section>);

  expect(baseElement.textContent).toMatch(props.title);
  expect(String(baseElement.innerHTML)).toMatch(children);
});
