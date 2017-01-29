import * as ReducerHelper from '../utils/reducerHelper';
import {initialState, createHandlers} from '../fragments/blog/blogSelectorReducerHandlers.js';

export const prefix = 'BLOG__';

const fragments = {
  blogSelector: {
    initialState: {
      ...initialState
    },
    handlers: {
      ...createHandlers(prefix)
    }
  }
};

const state = {
  root: {
  }
};

const handlers = {};

const getInitialState = () => {
	return ReducerHelper.createState(state, fragments);
};

export function blog(state = getInitialState(), action) {
	return ReducerHelper.runHandlers(state, action, handlers, fragments);
}

/* eslint-disable no-param-reassign */

