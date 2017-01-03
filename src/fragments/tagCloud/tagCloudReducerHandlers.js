import * as TagCloudActionTypes from './tagCloudActionTypes.js';

export function getInitialState() {
  return {
    totalArea: 0,
    wordElements: []
  };
}

/* eslint-disable no-param-reassign */ // the newState is passed in to avoid having to create a new state on each function
export const createHandlers = (prefix) => {
  const actionTypes = TagCloudActionTypes.createActionTypes(prefix);
  const handlers = {};

  handlers[actionTypes.INITIALIZE_CLOUD] = (newState, payload) => {
    // TODO better algo for figuring out height of font
    newState.totalArea = payload.width * payload.height;
    const elems = [];
    let sum = 0;
    if (payload.words) {
      // First calculate the total height of the sums
      payload.words.forEach((word) => {
        sum = sum + word.weight;
      });
      // Then calculate the height of each element
      payload.words.forEach((word) => {
        const size = Math.floor((word.weight / sum) * payload.height);
        elems.push({ text: word.label, size });
      });
    }
    newState.wordElements = elems;
    return newState;
  };

  return handlers;
};
