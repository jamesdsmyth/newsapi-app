import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';

import store from './reducers/combinedReducers';

import routes from './data/routes';

import Header from './components/Header';
import Main from './routes/Main';

import './styles/app.scss';

const App = () => (
  <Provider store={store}>
    <Router>
      <div className="page-container">
        <Header routes={routes} />
        <Main routes={routes} />  
      </div>
    </Router>
  </Provider>
)

export default App;