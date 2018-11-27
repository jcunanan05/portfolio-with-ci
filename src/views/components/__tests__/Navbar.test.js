import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import Navbar from '../Navbar';
import NavbarItem from '../Navbar/NavbarItem';

afterEach(cleanup);

test('Navbar burger toggles', () => {
  const { container } = render(<Navbar />);
  const isActive = 'is-active';
  const burger = container.querySelector('.navbar-burger');
  fireEvent.click(burger);

  expect(burger.classList.contains(isActive)).toBe(true);
  expect(Boolean(burger.getAttribute('aria-expanded'))).toBe(true);
});

test('Navbar Menu Expands on burger click', () => {
  const { container } = render(<Navbar />);
  const isActive = 'is-active';
  const burger = container.querySelector('.navbar-burger');
  const navbarMenu = container.querySelector('.navbar-menu');
  fireEvent.click(burger);

  expect(navbarMenu.classList.contains(isActive)).toBe(true);
});

test('NavbarItem renders text, href, className, and calls onClick', () => {
  const props = {
    className: 'sample-class',
    text: 'Sample Text',
    href: '/#sampleHref',
    onClick: jest.fn()
  };
  const { getByText } = render(<NavbarItem {...props} />);
  const link = getByText(props.text);
  fireEvent.click(link);

  expect(props.onClick).toHaveBeenCalledTimes(1);
  expect(link.getAttribute('href')).toBe(props.href);
  expect(link.textContent).toBe(props.text);
  expect(link.classList.contains(props.className)).toBe(true);
});
