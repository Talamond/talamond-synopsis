import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import { createTimelineComponent } from '../fragments/timeline/timelineComponent.js';
import { prefix } from '../reducers/timelineReducer.js';

@connect(state => ({
	resume: state.resume
}))
export class ResumeContainer extends React.Component {
	static propTypes = {
		// router
		location: PropTypes.object,
		params: PropTypes.object,
		route: PropTypes.object,
		routeParams: PropTypes.object,
		routes: PropTypes.array,

		resume: PropTypes.object
	};

	componentWillMount() {
		// this.Timeline = createTimelineComponent((store) => store.timeline.fragments.timeline, prefix);
	}

	render() {
		// const Timeline = this.Timeline;

		return (
			<div>
				Resume
			</div>
		);
	}
}
