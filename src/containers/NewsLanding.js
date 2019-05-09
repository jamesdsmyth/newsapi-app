import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getNewsAction } from '../actions/actions';

import NewsGrid from '../components/NewsGrid';
import PlaceholderGrid from '../components/PlaceholderGrid';
import OnlineStatusSection from '../components/OnlineStatusSection';

class NewsLanding extends Component {

  // on componentDidMount we will dispatch an action to call the API.
  // we will pass the category parameter that was passed through from the <Route />
  componentDidMount() {
    this.props.getNewsDispatch(this.props.category);
  }

  render() {
    const currentNews = this.props.news[this.props.category];

    // here we are seeing if the category exists in the reducer.
    // if it currently does not exist and we are making the API call, we will show the loading section
    let grid;
    let gridClass;

    if(currentNews) {
    
      // 3 states for the status - ok, error, loading. Default is loading.
      // when there is an error, if there is articles in that current category in the reducer, we will show them these
      // articles. This is more user friendly.
      switch(currentNews.status) {
        case 'ok':
          grid = <NewsGrid articles={currentNews.articles} category={this.props.match.path} />
          gridClass = 'loaded';
          break;
        case 'error':
          grid = currentNews.articles.length > 0 ? <NewsGrid articles={currentNews.articles} category={this.props.match.path} /> : <p>We are having trouble fetching your news.</p>
          gridClass = 'loaded';
          break;
        default: 
          grid = <PlaceholderGrid />
          gridClass = 'loading';
          break;
      }
    } else {
      grid = <PlaceholderGrid />
      gridClass = 'loading';
    }

    return (
      <section className="main-content">
        {!this.props.onlineStatus.online && <OnlineStatusSection />}
        <h1 className="page-title">
          {this.props.category} News
        </h1>
        <section className={`news-grid news-grid--${gridClass}`}>
          {grid}
        </section>
      </section>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    news: state.newsReducer,
    onlineStatus: state.onlineStatusReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getNewsDispatch: (category) => dispatch(getNewsAction(category))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewsLanding));
