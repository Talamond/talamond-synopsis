import {createActionTypes} from './blogSelectorActionTypes.js';
import * as ReducerHelper from '../../utils/reducerHelper';

const fragments = {
};

export const initialState = {
  selectedBlog: null
};

/* eslint-disable no-param-reassign */ // the newState is passed in to avoid having to create a new state on each function
export const createHandlers = (prefix) => {
  const actionTypes = createActionTypes(prefix);
  const handlers = {};

  handlers[actionTypes.SELECT_BLOG] = (newState, payload) => {
    newState.selectedBlog = payload.selectedBlog;
    return newState;
  };

  return ReducerHelper.addFragmentsHandlers(handlers, fragments);
};
