import * as ReducerHelper from '../utils/reducerHelper';
import * as ResumeReducerHandlers from '../fragments/resume/resumeReducerHandlers.js';

export const prefix = 'RESUME__';

const fragments = {
  resume: {
    initialState: {
      ...ResumeReducerHandlers.getInitialState()
    },
    handlers: {
      ...ResumeReducerHandlers.createHandlers(prefix)
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

export function resume(state = getInitialState(), action) {
	return ReducerHelper.runHandlers(state, action, handlers, fragments);
}

/* eslint-disable no-param-reassign */

