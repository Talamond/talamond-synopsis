import React from 'react';
import { Route, Redirect, IndexRoute } from 'react-router';
import AppContentContainer from './containers/appContentContainer.js';
import { TimelineContainer }  from './containers/timelineContainer.js';
import { BlogContainer }  from './containers/blogContainer.js';
import { NAVIGATION } from './constants/navigation.js';

export default (
	<Route path="/" component={AppContentContainer}>
    <IndexRoute component={TimelineContainer}/>
		<Route path={NAVIGATION.TIMELINE.PATH} component={TimelineContainer} />
		<Route path={NAVIGATION.ABOUT_ME.PATH} component={BlogContainer} />
    <Route path={NAVIGATION.BLOG.PATH} component={BlogContainer} />
	</Route>
);
