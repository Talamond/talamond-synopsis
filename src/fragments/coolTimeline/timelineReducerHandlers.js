import * as TimelineActionTypes from './timelineActionTypes.js';
import moment from 'moment';
import * as ReducerHelper from '../../utils/reducerHelper';
import _ from 'lodash';
import {getTagCloudPrefix} from './timelineHelper.js';

const format = 'YYYY-MM-DD';
const displayedMonths = 3;

const fragments = {
};

export const initialState = {
  timelineElements: [],
  selectedTabs: {}
};

/* eslint-disable no-param-reassign */ // the newState is passed in to avoid having to create a new state on each function
export const createHandlers = (prefix) => {
	const actionTypes = TimelineActionTypes.createActionTypes(prefix);
	const handlers = {};

	handlers[actionTypes.SELECT_TAB] = (newState, payload) => {
		// put up a spinner or something
    newState.selectedTabs[payload.id] = payload.tabIndex;
		return newState;
	};

	handlers[actionTypes.FETCH_DATA] = (newState, payload) => {
	  newState.timelineElements = payload.data;
    return newState;
  };

	return ReducerHelper.addFragmentsHandlers(handlers, fragments);
};
