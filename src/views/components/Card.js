import React, { Component, Children, cloneElement } from 'react';

export default class Card extends Component {
  static Content = ({ children }) => (
    <div className="card-content">{children}</div>
  );

  static Footer = ({ children }) => (
    <footer className="card-footer">{children}</footer>
  );

  render() {
    const childrenElements = Children.map(this.props.children, childElement =>
      cloneElement(childElement)
    );

    return <div className="card">{childrenElements}</div>;
  }
}
