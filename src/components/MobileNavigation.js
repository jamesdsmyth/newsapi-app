import React from 'react';
import PropTypes from 'prop-types';

const MobileNavigation = ({ showNavigation, hideNavigation }) => (
  <section className="header-content__mobile-buttons">
    <span
      className="header-content__mobile-buttons__menu"
      onClick={showNavigation}>
      Menu
    </span>
    <span 
      onClick={hideNavigation}>
      x
    </span>
  </section>
);

MobileNavigation.propTypes = {
  showNavigation: PropTypes.func.isRequired,
  hideNavigation: PropTypes.func.isRequired
}

export default MobileNavigation;