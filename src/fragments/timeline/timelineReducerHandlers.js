import * as TimelineActionTypes from './timelineActionTypes.js';
import moment from 'moment';
import * as ReducerHelper from '../../utils/reducerHelper';
import _ from 'lodash';
import {getTagCloudPrefix} from './timelineHelper.js';

const format = 'YYYY-MM-DD';
const displayedMonths = 3;

const fragments = {
};

function findTimelineRows(elems) {
  // TODO sort elements
  const newElems = [];
  const spans = [];
  _.forEach(elems, (elem, i) => {
    newElems.push(elem);
    if (spans.length === 0) {
      spans.push([{startDate: elem.startDate, endDate: elem.endDate, color: elem.color}]);
      newElems[i].row = 0;
    } else {
      let found = false;
      for (let x = 0; x < spans.length; x++) {
        if (moment(spans[x][spans[x].length - 1].endDate).isBefore(elem.startDate)) { // TODO is this syntax right?
          spans[x].push({startDate: elem.startDate, endDate: elem.endDate, color: elem.color}); // overwrite this span
          newElems[i].row = x;
          found = true;
          break;
        }
      }
      if (!found) {
        spans.push([{startDate: elem.startDate, endDate: elem.endDate, color: elem.color}]);
        newElems[i].row = spans.length - 1;
      }
    }
  });
  return {newElems, timelineSpans: spans};
}

function createDate(date) {
  return moment(date, format);
}

export function getInitialState(prefix) {
  const now = moment().format(format);
  const then = moment().subtract(displayedMonths, 'months').format(format);
  return ReducerHelper.createState({
    displayStartDate: then,
    displayEndDate: now,
    timelineElements: [],
    timelineRows: [],
    timelineSpans: []
  }, fragments);
};

/* eslint-disable no-param-reassign */ // the newState is passed in to avoid having to create a new state on each function
export const createHandlers = (prefix) => {
	const actionTypes = TimelineActionTypes.createActionTypes(prefix);
	const handlers = {};

	handlers[actionTypes.CLICK_ELEM] = (newState, payload) => {
		// put up a spinner or something
    const elem = _.find(newState.timelineElements, (timelineElement) => {
      return timelineElement.id === payload.timelineElem.id;
    });
    if (elem) {
      elem.expanded = !elem.expanded;
    }
		return newState;
	};

	handlers[actionTypes.FETCH_DATA] = (newState, payload) => {
    const rowsObj = findTimelineRows(payload.data);
    const now = moment().format(format);
    const then = moment().subtract(displayedMonths, 'months').format(format);
    // todo this can look more normal now
    return ReducerHelper.createState({
      displayStartDate: then,
      displayEndDate: now,
      timelineElements: payload.data,
      timelineRows: rowsObj.newElems,
      timelineSpans: rowsObj.timelineSpans
    }, fragments);
  };

	return ReducerHelper.addFragmentsHandlers(handlers, fragments);
};
