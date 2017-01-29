import * as ReducerHelper from '../utils/reducerHelper';
import {initialState, createHandlers} from '../fragments/blog/blogSelectorReducerHandlers.js';
import { createDate } from '../utils/dateHelper.js';

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
    blogs: [
      {
        id: 'testingFragment',
        title: 'Testing redux-fragments',
        path: '/testing-redux-fragments',
        summary: 'Learn stratageies on testing redux-fragments',
        date: createDate('2017-02-07')
      }, {
        id: 'fragment',
        title: 'Introducing redux-fragments',
        path: '/redux-fragments',
        summary: 'Learn about redux-fragments and how they might help shape your web application',
        date: createDate('2017-01-29')
      }
    ]
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

