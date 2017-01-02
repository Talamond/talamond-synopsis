import * as ReducerHelper from '../utils/reducerHelper';

export const prefix = 'RESUME__';

const fragments = {
};

const initialState = {
  root: {
  }
};

const handlers = {};

const getInitialState = () => {
	return ReducerHelper.createState(initialState, fragments);
};

export function resume(state = getInitialState(), action) {
	return ReducerHelper.runHandlers(state, action, handlers, fragments);
}

/* eslint-disable no-param-reassign */

