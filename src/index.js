import React from 'react';
import * as ReactDOM from 'react-dom';
import { store } from './store';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import App from './app.js';

const history = syncHistoryWithStore(browserHistory, store);

function run() {
	ReactDOM.render(<App store={store} history={history}/>, document.getElementById('root'));
}

run();
