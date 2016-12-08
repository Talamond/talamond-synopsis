// Polyfills must be imported first!
// import 'babel-polyfill';
import React, { Component, PropTypes } from 'react';
import { store } from './store';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import Routes from './routes';

// Create an enhanced history that syncs navigation events with the storess
const history = syncHistoryWithStore(browserHistory, store);

export default class App extends Component {
  static propTypes = {
    store: PropTypes.object,
    history: PropTypes.object
  };

  render() {
    return (
      <Provider store={this.props.store}>
        <Router history={history}>
          {Routes}
        </Router>
      </Provider>
    );
  }
}
