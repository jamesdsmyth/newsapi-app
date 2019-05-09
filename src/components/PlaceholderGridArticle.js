import React from 'react';
import PropTypes from 'prop-types';

const PlaceholderGridArticle = ({ index }) => {
  return (
    <div className={`article article--${index}`} />
  ) 
}

PlaceholderGridArticle.propTypes = {
  index: PropTypes.number.isRequired
}

export default PlaceholderGridArticle;