import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import { createTimelineComponent } from '../fragments/coolTimeline/timelineComponent.js';
import { prefix } from '../reducers/timelineReducer.js';

@connect(state => ({
	timeline: state.timeline
}))
export class TimelineContainer extends React.Component {
	static propTypes = {
		// router
		location: PropTypes.object,
		params: PropTypes.object,
		route: PropTypes.object,
		routeParams: PropTypes.object,
		routes: PropTypes.array,

		timeline: PropTypes.object
	};

	componentWillMount() {
		this.Timeline = createTimelineComponent((store) => store.timeline.fragments.timeline, prefix);
	}

	render() {
		const Timeline = this.Timeline;

		return (
      <Timeline/>
		);
	}
}
