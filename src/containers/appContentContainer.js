import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Footer } from '../components/footerComponent.js';
import { Header } from '../components/headerComponent.js';
import { navigate } from '../utils/navHelper.js';
import { NAVIGATION } from '../constants/navigation.js';
import _ from 'lodash';
import './appContentContainer.scss';

const headerElems = [];

_.forIn(NAVIGATION, (v) => {
  headerElems.push({
    label: v.TITLE,
    onClick: (e) => navigate(e, v.PATH)
  });
});

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
			</div>
		);
	}
}
