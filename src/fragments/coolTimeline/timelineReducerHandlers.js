import * as TimelineActionTypes from './timelineActionTypes.js';
import moment from 'moment';
import * as ReducerHelper from '../../utils/reducerHelper';
import _ from 'lodash';
import {getTagCloudPrefix} from './timelineHelper.js';

const format = 'YYYY-MM-DD';
const displayedMonths = 3;

const fragments = {
};

export const initialState = {
  timelineElements: [],
  selectedTabs: {},
  skillMap: {},
  allSkills: [],
  summaryWidth: window.innerWidth,
  summaryHeight: window.innerHeight
};

/* eslint-disable no-param-reassign */ // the newState is passed in to avoid having to create a new state on each function
export const createHandlers = (prefix) => {
	const actionTypes = TimelineActionTypes.createActionTypes(prefix);
	const handlers = {};

	handlers[actionTypes.SELECT_TAB] = (newState, payload) => {
		// put up a spinner or something
    newState.selectedTabs[payload.id] = payload.tabIndex;
		return newState;
	};

	handlers[actionTypes.FETCH_DATA] = (newState, payload) => {
	  // sort by reserve end time
    // TODO modifying payload
    newState.timelineElements = _.sortBy(payload.data, (elem) => {
      return -1 * elem.endDate.unix();
    });
    _.forEach(payload.data, (elem) => {
      if (elem.skills) {
        _.forEach(elem.skills, (skill) => {
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

  handlers[actionTypes.CHANGE_DIMENSIONS] = (newState, payload) => {
    // put up a spinner or something
    newState.summaryWidth = payload.width;
    newState.summaryHeight = payload.height;
    return newState;
  };

	return ReducerHelper.addFragmentsHandlers(handlers, fragments);
};
