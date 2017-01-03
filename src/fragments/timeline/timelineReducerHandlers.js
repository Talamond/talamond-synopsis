import * as TimelineActionTypes from './timelineActionTypes.js';
import {getInitialState as getTagCloudInitialState, createHandlers as createTagCloudHandlers} from '../tagCloud/tagCloudReducerHandlers.js';
import moment from 'moment';
import * as ReducerHelper from '../../utils/reducerHelper';
import _ from 'lodash';
import {getTagCloudPrefix} from './timelineHelper.js';
import {createTagCloudComponent} from '../tagCloud/tagCloudComponent.js';

const format = 'YYYY-MM-DD';
const displayedMonths = 3;

// TODO, make this come from node server
/*
const sampleTimelineElements = [
  {
    id: 1,
    startDate: createDate('2006-09-01'),
    endDate: createDate('2011-04-30'),
    content: 'Bachelor of Computer Science/Software Engineering Option - Co-operative Program, University of Waterloo',
    color: '#F1C40F'
  },
  {
    id: 2,
    startDate: createDate('2007-01-01'),
    endDate: createDate('2007-04-30'),
    content: 'First coop term, Quality Assurance Functional Analyst at Parlay Entertainment.',
    color: '#BF5FFF'
  },
  {
    id: 3,
    startDate: createDate('2007-09-01'),
    endDate: createDate('2007-12-31'),
    content: 'Second coop term, Java Programmer at Ministry of Education.',
    color: '#99A3A4',
    skills: [{label: 'JSP', weight: 7}, {label: 'J2EE', weight: 4}, {label: 'Hibernate', weight: 7}, {label: 'Java', weight: 10},
        {label: 'OO', weight: 4}, {label: 'Web', weight: 8}
    ]
  },
  {
    id: 4,
    startDate: createDate('2008-05-01'),
    endDate: createDate('2008-08-31'),
    content: 'Third coop term, Java Programmer at SQL Power Group Inc.',
    color: '#229954',
      skills: [{label: 'Swing', weight: 7}, {label: 'JPA', weight: 7}, {label: 'Hibernate', weight: 7}, {label: 'Java', weight: 10},
          {label: 'OO', weight: 4}
      ]
  },
  {
    id: 5,
    startDate: createDate('2009-01-01'),
    endDate: createDate('2009-04-30'),
    content: 'Forth coop term, Java Programmer at N8Identity.',
    color: '#D35400',
      skills: [{label: 'Spring', weight: 7}, {label: 'JPA', weight: 7}, {label: 'Hibernate', weight: 7}, {label: 'Java', weight: 10},
          {label: 'OO', weight: 4}, {label: 'RichFaces', weight: 7}, {label: 'PostgreSQL', weight: 7}, {label: 'JUnit', weight: 7},
          {label: 'Agile', weight: 7}
      ]
  },
  {
    id: 6,
    startDate: createDate('2009-09-01'),
    endDate: createDate('2009-12-31'),
    content: 'Fifth coop term, Java Programmer at N8Identity.',
    color: '#D35400'
  },
  {
    id: 7,
    startDate: createDate('2010-05-01'),
    endDate: createDate('2010-08-31'),
    content: 'Sixth coop term, Java Programmer at N8Identity.',
    color: '#D35400'
  },
  {
    id: 8,
    startDate: createDate('2011-05-01'),
    endDate: createDate('2012-12-15'),
    content: 'Full time position, Java Programmer at N8Identity.',
    color: '#D35400'
  },
  {
    id: 9,
    startDate: createDate('2013-01-01'),
    endDate: createDate('2017-01-01'),   // todo get current date and use that
    content: 'Full time position, IBM.',
    color: '#3498DB'
  },
];
*/
// TODO, ReducerHelper function?

const fragments = (prefix, tlElems) => {
  const frags = {};
  _.forEach(tlElems, (elem) => {
    const tagPrefix = getTagCloudPrefix(prefix, elem.id);
    frags[tagPrefix] = {
      initialState: getTagCloudInitialState(),
      handlers: createTagCloudHandlers(tagPrefix)
    };
  });
  return frags;
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
    timelineSpans: [],
    TagClouds: {} // these are the react classes for redux fragments
  }, fragments(prefix, []));
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
    // each needs different prefix
    // TODO fragment helper?
    const TagClouds = {};
    _.forEach(payload.data, (elem, index) => {
      const tcPrefix = getTagCloudPrefix(prefix, elem.id);
      TagClouds[elem.id] = createTagCloudComponent((s) => {
        return payload.selectState(s).fragments[tcPrefix];
      }, tcPrefix, {});
    });
    return ReducerHelper.createState({
      displayStartDate: then,
      displayEndDate: now,
      timelineElements: payload.data,
      timelineRows: rowsObj.newElems,
      timelineSpans: rowsObj.timelineSpans,
      TagClouds
    }, fragments(prefix, payload.data));
  };

	return ReducerHelper.addFragmentsHandlers(handlers, fragments(prefix));
};
