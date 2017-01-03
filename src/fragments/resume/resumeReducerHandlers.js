import * as ResumeActionTypes from './resumeActionTypes.js';
import * as ReducerHelper from '../../utils/reducerHelper';
import _ from 'lodash';

export function getInitialState() {
  return {
    jobData: [],
    educationData: [],
    expandedSections: {}
  };
}

/* eslint-disable no-param-reassign */ // the newState is passed in to avoid having to create a new state on each function
export const createHandlers = (prefix) => {
  const actionTypes = ResumeActionTypes.createActionTypes(prefix);
  const handlers = {};

  handlers[actionTypes.FETCH_DATA] = (newState, payload) => {
    // Data filtering should always be done in reducer
    _.forEach(payload.data, (elem) => {
      if (elem.type === 'education') {
        newState.educationData.push(elem);
      } else {
        newState.jobData.push(elem);
      }
    });
    return newState;
  };

  return handlers;
};
