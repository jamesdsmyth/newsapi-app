import React from 'react';
import PropTypes from 'prop-types';
import NavigationList from './NavigationList';

const Navigation = ({ routes, hideNavigation }) => (
  <nav className="navigation"> 
    <NavigationList 
      routes={routes}
      hideNavigation={hideNavigation} 
    />
  </nav>
);

Navigation.propTypes = {
  routes: PropTypes.array.isRequired,
  hideNavigation: PropTypes.func.isRequired
}

export default Navigation;