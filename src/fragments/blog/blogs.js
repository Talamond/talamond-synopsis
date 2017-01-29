import React from 'react';
import {createDate} from '../../utils/dateHelper.js';

// TODO, this was moved to top reducer
export const blogs = {
  fragment: {
    title: 'Introducing redux-fragments',
    component: <div>Intro</div>,
    path: '/redux-fragments',
    summary: 'Learn about redux-fragments and how they might help shape your web application',
    date: createDate('2017-01-29')
  },
  testingFragment: {
    title: 'Testing redux-fragments',
    component: <div>Testing</div>,
    path: '/testing-redux-fragments',
    summary: 'Learn stratageies on testing redux-fragments',
    date: createDate('2017-02-07')
  }
};
