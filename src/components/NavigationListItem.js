import React from 'react';
import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';

const NavigationListItem = ({ item, onClick }) => (
  <li 
    className="navigation__main__list-item"
    onClick={onClick}
  >
    <NavLink
      to={`/${item.route}`}
      className="navigation__main__list-item__link"
      activeClassName="navigation__main__list-item__link--active"
    >
      {item.route}
    </NavLink>
  </li>
);

NavigationListItem.propTypes = {
  item: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired
}

export default NavigationListItem;