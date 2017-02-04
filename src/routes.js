import React from 'react';
import {Route, IndexRoute} from 'react-router';
import AppContentContainer from './containers/appContentContainer.js';
import {TimelineContainer}  from './containers/timelineContainer.js';
import {BlogContainer}  from './containers/blogContainer.js';
import {NAVIGATION} from './constants/navigation.js';

export default (
  <Route path="/" component={AppContentContainer}>
    <IndexRoute component={TimelineContainer}/>
    <Route path={NAVIGATION.TIMELINE.PATH} component={TimelineContainer}/>
    <Route path={NAVIGATION.BLOG.PATH} component={BlogContainer}>
      <IndexRoute component={BlogContainer}/>
      <Route path={NAVIGATION.BLOG.PATH + NAVIGATION.BLOG.FRAGMENT.PATH} component={BlogContainer}/>
      <Route path={NAVIGATION.BLOG.PATH + NAVIGATION.BLOG.TESTING_FRAGMENT.PATH} component={BlogContainer}/>
      <Route path={NAVIGATION.BLOG.PATH + NAVIGATION.BLOG.ABOUT_ME.PATH} component={BlogContainer}/>
      <Route path={NAVIGATION.BLOG.PATH + NAVIGATION.BLOG.SYNOPSIS.PATH} component={BlogContainer}/>
    </Route>
  </Route>
);
