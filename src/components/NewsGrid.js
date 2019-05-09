import React from 'react';
import PropTypes from 'prop-types';

import NewsGridArticle from './NewsGridArticle';

const NewsGrid = ({ articles, category }) => (
  articles.map((item, index) => {
    return <NewsGridArticle
      article={item}
      category={category}
      index={index}
      key={index}
    />
  })
);

NewsGrid.propTypes = {
  articles: PropTypes.array.isRequired,
  category: PropTypes.string.isRequired
}

export default NewsGrid;