import * as TagCloudActionTypes from './tagCloudActionTypes.js';

export function getInitialState() {
  return {
    elements: []
  };
};

/* eslint-disable no-param-reassign */ // the newState is passed in to avoid having to create a new state on each function
export const createHandlers = (prefix) => {
  const actionTypes = TagCloudActionTypes.createActionTypes(prefix);
  const handlers = {};

  handlers[actionTypes.INITIALIZE_CLOUD] = (newState, payload) => {
    // do some sorting and algortim
    newState.elements = payload.data;
    return newState;
  };

  return handlers;
};
