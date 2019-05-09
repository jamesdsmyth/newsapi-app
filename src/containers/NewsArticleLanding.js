import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getNewsAction } from '../actions/actions';

class NewsArticleLanding extends Component {

  constructor() {
    super();

    this.fetchNews = this.fetchNews.bind(this);
  }

  // function is called when a user lands on an article page and there is no current
  // news from that category
  fetchNews() {
    if(!this.props.news[this.props.category]) {
      this.props.getNewsDispatch(this.props.category);
    }
  }

  componentDidMount() {
    this.fetchNews()
  }

  render() {

    const newsObj = this.props.news;

    if(newsObj[this.props.category]) {

      const newsArticle = newsObj[this.props.category].articles.find(item => {
        return item.id ===  this.props.match.params.articleId;
      });

      if(newsArticle) {
        return (
          <section className="main-content">
            <div className="page-article">
              <h1 className="page-title">
                {newsArticle.title}
              </h1>
              <img
                className="page-article__image"
                src={newsArticle.urlToImage} alt={newsArticle.title} 
              />
              <p>
                {newsArticle.content}
              </p>
            </div>
          </section>
        )
      } else {
        return <p>This article does not exist anymore</p>
      }
    } else {
      return <p>Currently fetching this article</p>
    }
  }
}

const mapStateToProps = (state) => {
  return {
    news: state.newsReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getNewsDispatch: (category) => dispatch(getNewsAction(category))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewsArticleLanding));
