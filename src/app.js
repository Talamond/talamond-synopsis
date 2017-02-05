import React, { Component, PropTypes } from 'react';
import { store } from './store';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import Routes from './routes';

const history = syncHistoryWithStore(browserHistory, store);

export default class App extends Component {
  static propTypes = {
    store: PropTypes.object,
    history: PropTypes.object
  };

  scrollToTop() {
    window.scrollTo(0, 0);
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
  }

  render() {
    return (
      <Provider store={this.props.store}>
        <Router history={history} onUpdate={() => this.scrollToTop()}>
          {Routes}
        </Router>
      </Provider>
    );
  }
}
