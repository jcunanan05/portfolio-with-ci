import React from 'react';
import ReactDOM from 'react-dom';
import Grid, { Cell } from '../Grid';

test('Grid has class named `mdl-grid`', () => {
  const container = document.createElement('div');
  ReactDOM.render(<Grid />, container);
  expect(container.querySelector('div').className).toMatch('mdl-grid');
})

test('Grid gets passed classNames right', () => {
  const container = document.createElement('div');
  const mockClass = 'extra-class-name';
  ReactDOM.render(<Grid className={mockClass} />, container);
  expect(container.querySelector('div').className).toMatch(mockClass)
});

test('Cell has class named `mdl-cell`', () => {
  const container = document.createElement('div');
  ReactDOM.render(<Cell />, container);
  expect(container.querySelector('div').className).toMatch('mdl-cell');
})

test('Cell gets passed classNames right', () => {
  const container = document.createElement('div');
  const mockClass = 'extra-class-name';
  ReactDOM.render(<Cell className={mockClass} />, container);
  expect(container.querySelector('div').className).toMatch(mockClass);
})