import * as ReducerHelper from '../utils/reducerHelper';
import {initialState, createHandlers} from '../fragments/blog/blogSelectorReducerHandlers.js';
import { createDate } from '../utils/dateHelper.js';
import { NAVIGATION } from '../constants/navigation.js';

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
        id: 'about-me',
        title: NAVIGATION.BLOG.ABOUT_ME.TITLE,
        path: NAVIGATION.BLOG.ABOUT_ME.PATH,
        summary: 'Learn a bit about me',
        date: createDate('2017-03-08')
      }, {
        id: 'talamond-synopsis',
        title: NAVIGATION.BLOG.SYNOPSIS.TITLE,
        path: NAVIGATION.BLOG.SYNOPSIS.PATH,
        summary: 'Learn the cogs and gears behind this website',
        date: createDate('2017-02-08')
      }, {
        id: 'testingFragment',
        title: NAVIGATION.BLOG.TESTING_FRAGMENT.TITLE,
        path: NAVIGATION.BLOG.TESTING_FRAGMENT.PATH,
        summary: 'Learn stratageies on testing redux-fragments',
        date: createDate('2017-02-07')
      }, {
        id: 'fragment',
        title: NAVIGATION.BLOG.FRAGMENT.TITLE,
        path: NAVIGATION.BLOG.FRAGMENT.PATH,
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

