import React from 'react';
import {createDate} from '../../utils/dateHelper.js';

export const blogs = {
  fragment: {
    title: 'Introducing redux-fragments',
    component: <div>Intro</div>,
    summary: 'Learn about redux-fragments and how they might help shape your web application',
    date: createDate('2017-01-29')
  },
  testingFragment: {
    title: 'Testing redux-fragments',
    component: <div>Testing</div>,
    summary: 'Learn stratageies on testing redux-fragments',
    date: createDate('2017-02-07')
  }
};
