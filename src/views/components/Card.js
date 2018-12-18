import React, { Component, Children, cloneElement } from 'react';
import './Card.css';

export default class Card extends Component {
  static Content = ({ children }) => (
    <div className="card-content Card__content">{children}</div>
  );

  static Footer = ({ children }) => (
    <footer className="card-footer">{children}</footer>
  );

  render() {
    const childrenElements = Children.map(this.props.children, childElement =>
      cloneElement(childElement)
    );

    const { className = '' } = this.props;

    return <div className={`Card card ${className}`}>{childrenElements}</div>;
  }
}
