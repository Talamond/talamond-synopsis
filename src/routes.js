import React from 'react';
import { Route } from 'react-router';
import AppContentContainer from './containers/appContentContainer.js';
import { TimelineContainer }  from './containers/timelineContainer.js';
import { NAVIGATION } from './constants/navigation.js';

export default (
	<Route path="/" component={AppContentContainer}>
		<Route path={NAVIGATION.TIMELINE.PATH} component={TimelineContainer} />
	</Route>
);
