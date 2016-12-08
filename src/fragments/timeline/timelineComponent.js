import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {createActionCreators} from './timelineActionCreator.js';
import {createActionTypes} from './timelineActionTypes.js';
import {TimelineElem} from './timelineElemComponent.js';
import _ from 'lodash';
import './timeline.scss';
import {calculateLeft, calculateLength} from './timelineHelper.js';

export function createTimelineComponent(selectState, prefix, urls) {
	@connect(store => ({
		timeline: selectState(store)
	}), createActionCreators(createActionTypes(prefix), urls))
	class Timeline extends React.Component {

		static propTypes = {
			timeline: PropTypes.object, // state

			// actions
			goToDate: PropTypes.func,
      clickElem: PropTypes.func
		};

		renderTimelines() {
		  const elems = [];
      const timeSpans = []
      _.forEach(this.props.timeline.timelineElements, (elem) => {
        elems.push(<TimelineElem timelineElem={elem} onClick={(elem) => this.props.clickElem(elem)}/>);
        if (elem.startDate && elem.endDate) {
          timeSpans.push(<div className="timeline-span"
                          style={{
                            width: calculateLength(elem.startDate, elem.endDate) + 'px',
                            top: (elem.row * 10 + 50) + 'px',
                            left: calculateLeft(elem.startDate)}}/>);
        }
      });
      return elems.concat(timeSpans);
    }

		render() {
			const {timeline, goToDate} = this.props;

			return (
				<div className="timeline-root">
          {this.renderTimelines()}
				</div>
			);
		}
	}

	return Timeline;
}
