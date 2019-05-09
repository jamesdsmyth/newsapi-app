import React, { Component } from 'react';

import { Route, Redirect } from "react-router-dom";

import NewsLanding from '../containers/NewsLanding';
import NewsArticleLanding from '../containers/NewsArticleLanding';

// Main is the container that houses the routes of the app
class Main extends Component {
  render() {
    return (
      <main className="main">
        <Route exact path="/" render={() => (
            <Redirect to="/home"/>
          )}
        />
        {
          this.props.routes.map((item, index) => (
            <Route
              exact
              path={`/${item.route}`}
              key={index}
              render={() => (
                <NewsLanding category={item.category} />
              )}
            />
          ))
        }
        {
          this.props.routes.map((item, index) => (
            <Route
              path={`/${item.route}/:articleId`}
              key={index}
              render={(props) => (
                <NewsArticleLanding {...props} category={item.category} />
              )}
            />
          ))
        }
      </main>
    )
  }
}

export default Main;