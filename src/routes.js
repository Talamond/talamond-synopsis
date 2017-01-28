import React from 'react';
import { Route } from 'react-router';
import AppContentContainer from './containers/appContentContainer.js';
import { TimelineContainer }  from './containers/timelineContainer.js';
import { BlogContainer }  from './containers/blogContainer.js';
import { ResumeContainer }  from './containers/resumeContainer.js';
import { NAVIGATION } from './constants/navigation.js';

export default (
	<Route path="/" component={AppContentContainer}>
		<Route path={NAVIGATION.TIMELINE.PATH} component={TimelineContainer} />
		<Route path={NAVIGATION.ABOUT_ME.PATH} component={BlogContainer} />
    <Route path={NAVIGATION.BLOG.PATH} component={BlogContainer} />
	</Route>
);
