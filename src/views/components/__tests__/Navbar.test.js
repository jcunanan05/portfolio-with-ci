import React from 'react';
import ReactDOM from 'react-dom';
import Drawer from '../Navbar/Drawer';
import Header from '../Navbar/Header';
import Link from '../Navbar/Link';

test('Navbar Drawer has correct title', () => {
  const container = document.createElement('div');
  const mockString = 'Fake Title';
  ReactDOM.render(<Drawer title={mockString} />, container);
  expect(container.textContent).toMatch(mockString);
});

test('Navbar Header has correct title', () => {
  const container = document.createElement('div');
  const mockString = 'Fake Title';
  ReactDOM.render(<Header title={mockString} />, container);
  expect(container.textContent).toMatch(mockString);
});

test('Navbar link has correct title and href', () => {
  const container = document.createElement('div');
  const mockString = 'Fake Title';
  const mockHref = '#fake-href';
  ReactDOM.render(<Link title={mockString} href={mockHref} />, container);

  expect(container.textContent).toMatch(mockString);
  expect(container.querySelector('a').getAttribute('href')).toMatch(mockHref);
});
