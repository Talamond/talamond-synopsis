import * as ReducerHelper from '../utils/reducerHelper';
import { createActionTypes } from '../fragments/timeline/timelineActionTypes.js';
import * as TimelineReducerHandlers from '../fragments/timeline/timelineReducerHandlers.js';

export const prefix = 'TIMELINE__';
const actionTypes = createActionTypes(prefix);

const fragments = {
	timeline: {
		initialState: {
			...TimelineReducerHandlers.getInitialState(prefix)
		},
		handlers: {
			...TimelineReducerHandlers.createHandlers(prefix)
		}
	}
};

const initialState = {
  root: {
  }
};

const handlers = {};

const getInitialState = () => {
	return ReducerHelper.createState(initialState, fragments);
};

export function timeline(state = getInitialState(), action) {
	return ReducerHelper.runHandlers(state, action, handlers, fragments);
}

/* eslint-disable no-param-reassign */

