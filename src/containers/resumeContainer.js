import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import { createResumeComponent } from '../fragments/resume/resumeComponent.js';
import { prefix } from '../reducers/resumeReducer.js';

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
		this.Resume = createResumeComponent((store) => store.resume.fragments.resume, prefix);
	}

	render() {
		const Resume = this.Resume;

		return (
			<Resume/>
		);
	}
}
