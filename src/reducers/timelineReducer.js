import * as ReducerHelper from '../utils/reducerHelper';
import { createActionTypes } from '../fragments/coolTimeline/timelineActionTypes.js';
import * as TimelineReducerHandlers from '../fragments/coolTimeline/timelineReducerHandlers.js';

export const prefix = 'COOL_TIMELINE__';
const actionTypes = createActionTypes(prefix);

const fragments = {
	timeline: {
		initialState: {
			...TimelineReducerHandlers.initialState
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

