import React from 'react';
import PropTypes from 'prop-types';

import NavigationListItem from './NavigationListItem';

const NavigationList = ({ routes, hideNavigation }) => (
  <ul className="navigation__main">
    {
      routes.map((item, index) => (
        <NavigationListItem
          key={index}
          item={item}
          onClick={hideNavigation}
        />
      ))
    }
  </ul>
);

NavigationList.propTypes = {
  routes: PropTypes.array.isRequired,
  hideNavigation: PropTypes.func.isRequired
}

export default NavigationList;