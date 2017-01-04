import * as ResumeActionTypes from './resumeActionTypes.js';
import * as ReducerHelper from '../../utils/reducerHelper';
import _ from 'lodash';

export function getInitialState() {
  return {
    jobData: [],
    educationData: [],
    expandedSections: {
      summary: true,
      education: true,
      work: true,
      personal: true
    },
    skillMap: {},
    allSkills: []
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
      if (elem.skills) {
        _.forEach(elem.skills, (skill) => {
          // todo, can I get rid of this if?
          if (newState.skillMap[skill.label]) {
            newState.skillMap[skill.label] += skill.weight;
          } else {
            newState.skillMap[skill.label] = skill.weight;
          }
        });
      }
    });
    const allSkills = [];
    _.forIn(newState.skillMap, (v, k) => {
      allSkills.push({label: k, weight: v});
    });
    newState.allSkills = allSkills;
    return newState;
  };

  handlers[actionTypes.EXPAND_SECTION] = (newState, payload) => {
    newState.expandedSections[payload.section] = !newState.expandedSections[payload.section];
    return newState;
  };

  return handlers;
};
