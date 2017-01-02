import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Footer } from '../components/footerComponent.js';
import { Header } from '../components/headerComponent.js';
import { navigate } from '../utils/navHelper.js';
import { NAVIGATION } from '../constants/navigation.js';
import './appContentContainer.scss';

const headerElems = [
	{
		label: 'Timeline',
		onClick: (e) => navigate(e, NAVIGATION.TIMELINE.PATH)
	},
	{
		label: 'Resume',
		onClick: (e) => navigate(e, NAVIGATION.RESUME.PATH)
	},
	{
		label: 'Blog',
		onClick: (e) => navigate(e, NAVIGATION.BLOG.PATH)
	}
];

@connect(state => ({
	router: state.router
}))
export default class Main extends Component {
	static propTypes = {
		appContentContainer: PropTypes.object,
		children: PropTypes.object,
		// router
		location: PropTypes.object,
		params: PropTypes.object,
		route: PropTypes.object,
		routeParams: PropTypes.object,
		routes: PropTypes.array,
	};

	render() {
		return (
			<div>
        <Header headers={headerElems}/>
        <div className="app-root">
          {this.props.children}
        </div>
				<Footer/>
			</div>
		);
	}
}
