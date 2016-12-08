import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { timeline } from './timelineReducer.js';

export const rootReducer = combineReducers({
	routing: routerReducer, // fixed name from lib
	timeline
});
