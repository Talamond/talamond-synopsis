import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import {rootReducer} from './reducers/rootReducer';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';


const logger = createLogger({
	collapsed: true,
	predicate: () =>
		true // eslint-disable-line no-unused-vars
});

const reduxRouterMiddleware = routerMiddleware(browserHistory);

const createStoreWithMiddleware = applyMiddleware(
	thunkMiddleware,
	reduxRouterMiddleware,
	logger
)(createStore);

function configureStore(initialState) {
	const store = createStoreWithMiddleware(rootReducer, initialState);
	return store;
}

export const store = configureStore();
