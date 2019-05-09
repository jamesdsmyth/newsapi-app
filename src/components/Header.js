import React, { Component } from 'react';
import Navigation from './Navigation';
import MobileNavigation from './MobileNavigation';

class Header extends Component {

  constructor() {
    super();

    this.state = {
      headerHidden: true
    }

    this.hideNavigation = this.hideNavigation.bind(this);
    this.showNavigation = this.showNavigation.bind(this);
  }

  // hiding the mobile navigation
  hideNavigation() {
    this.setState({
      headerHidden: true
    });

    window.scrollTo(0, 0);
  }

  // showing the mobile navigation
  showNavigation() {
    this.setState({
      headerHidden: false
    });
  }

  render() {
    return (
      <header className={`header-content ${this.state.headerHidden ? `header-content--hidden` : ``}`}>
        <MobileNavigation 
          hideNavigation={this.hideNavigation}
          showNavigation={this.showNavigation}
        />
        <Navigation 
          routes={this.props.routes}
          hideNavigation={this.hideNavigation}
        />
      </header>
    )
  }
}

export default Header;