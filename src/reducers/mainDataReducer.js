import * as ReducerHelper from '../utils/reducerHelper';

// This file contains data that is shared
export const prefix = 'MAIN__';

const fragments = {
};

const initialState = {
  root: {
    resumeData: [
      {
        id: 1,
        startDate: createDate('2006-09-01'),
        endDate: createDate('2011-04-30'),
        summary: 'Bachelor of Computer Science/Software Engineering Option - Co-operative Program, University of Waterloo',
        type: 'education',
        color: '#F1C40F'
      },
      {
        id: 2,
        startDate: createDate('2007-01-01'),
        endDate: createDate('2007-04-30'),
        title: 'Quality Assurance Functional Analyst',
        employer: 'Parlay Entertainment',
        type: 'coop',
        color: '#BF5FFF'
      },
      {
        id: 3,
        startDate: createDate('2007-09-01'),
        endDate: createDate('2007-12-31'),
        title: 'Java Programmer',
        employer: 'Ministry of Education',
        type: 'coop',
        color: '#99A3A4',
        skills: [{label: 'JSP', weight: 7}, {label: 'J2EE', weight: 4}, {label: 'Hibernate', weight: 7}, {label: 'Java', weight: 10},
          {label: 'OO', weight: 4}, {label: 'Web', weight: 8}
        ]
      },
      {
        id: 4,
        startDate: createDate('2008-05-01'),
        endDate: createDate('2008-08-31'),
        title: 'Java Programmer',
        employer: 'SQL Power Group Inc.',
        type: 'coop',
        color: '#229954',
        skills: [{label: 'Swing', weight: 7}, {label: 'JPA', weight: 7}, {label: 'Hibernate', weight: 7}, {label: 'Java', weight: 10},
          {label: 'OO', weight: 4}
        ]
      },
      {
        id: 5,
        startDate: createDate('2009-01-01'),
        endDate: createDate('2009-04-30'),
        title: 'Java Programmer',
        employer: 'N8Identity',
        type: 'coop',
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
        title: 'Java Programmer',
        employer: 'N8Identity',
        type: 'coop',
        color: '#D35400'
      },
      {
        id: 7,
        startDate: createDate('2010-05-01'),
        endDate: createDate('2010-08-31'),
        title: 'Java Programmer',
        employer: 'N8Identity',
        type: 'coop',
        color: '#D35400'
      },
      {
        id: 8,
        startDate: createDate('2011-05-01'),
        endDate: createDate('2012-12-15'),
        title: 'Java Programmer',
        employer: 'N8Identity',
        type: 'full',
        color: '#D35400'
      },
      {
        id: 9,
        startDate: createDate('2013-01-01'),
        endDate: createDate('2017-01-01'),   // todo get current date and use that
        title: '',
        employer: '',
        summary: 'IBM Canada (Varicent)',
        type: 'full',
        color: '#3498DB'
      },
    ]
  }
};

const handlers = {};

const getInitialState = () => {
  return ReducerHelper.createState(initialState, fragments);
};

export function mainData(state = getInitialState(), action) {
  return ReducerHelper.runHandlers(state, action, handlers, fragments);
}

/* eslint-disable no-param-reassign */

