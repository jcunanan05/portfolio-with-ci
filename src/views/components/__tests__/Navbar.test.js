import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import Navbar from '../Navbar';

afterEach(cleanup);

test('Navbar burger toggles', () => {
  const {container} = render(<Navbar />);
  const isActive = 'is-active';
  const burger = container.querySelector('.navbar-burger');
  fireEvent.click(burger);

  expect(burger.classList.contains(isActive)).toBe(true);
  expect(Boolean(burger.getAttribute('aria-expanded'))).toBe(true);
});

test('Navbar Menu Expands on burger click', () => {
  const {container} = render(<Navbar />);
  const isActive = 'is-active';
  const burger = container.querySelector('.navbar-burger');
  const navbarMenu = container.querySelector('.navbar-menu');
  fireEvent.click(burger);

  expect(navbarMenu.classList.contains(isActive)).toBe(true);
});
