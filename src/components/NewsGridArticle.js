import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { idCreator } from '../helpers/idCreator';

const NewsGridArticle = ({ article, category, index }) => {
  
  const articleId = idCreator(article.title);
  return (
    <article className={`article article--${index}`}>
      <div className="article__article-image-container">
        <img
          className="article__article-image"
          src={article.urlToImage} alt={article.title} 
        />
      </div>
      <div className="article__article-heading-container">
        <span className="article__article-source">
          {article.source.name}
        </span>
        <h2 className="article__article-heading">
          <Link 
            to={`${category}/${articleId}`}
            className="article__article-heading-link"
          >
            {article.title}
          </Link>
        </h2>
      </div>
    </article>
  )
}

NewsGridArticle.propTypes = {
  articles: PropTypes.array,
  category: PropTypes.string,
  index: PropTypes.number
}

export default NewsGridArticle;