import React, { Component } from 'react';

class Navbar extends Component {
  state = { isExpanded: false };

  toggleBurger = () => {
    this.setState(currentState => {
      return { isExpanded: !currentState.isExpanded };
    });
  };

  handleNavbarMenuClick = event => {
    if (!event.target.tagName === 'A') return;
    this.toggleBurger();
  };

  render() {
    const { isExpanded } = this.state;
    const { toggleBurger, handleNavbarMenuClick } = this;
    const isActive = isExpanded ? 'is-active' : null;
    const { menu } = this.props;
    return (
      <nav
        className="navbar is-fixed-top is-black"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <a href="/#" className="navbar-item">
              Brand
            </a>

            <a
              onClick={toggleBurger}
              role="button"
              href="/#"
              className={`navbar-burger ${isActive}`}
              aria-label="menu"
              aria-expanded={isExpanded}
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
          </div>

          <div
            onClick={handleNavbarMenuClick}
            className={`navbar-menu ${isActive}`}
          >
            <div className="navbar-end">
              { menu }
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
