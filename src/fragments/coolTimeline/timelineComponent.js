import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {createActionCreators} from './timelineActionCreator.js';
import {createActionTypes} from './timelineActionTypes.js';
import {TimelineElem} from './timelineElemComponent.js';
import _ from 'lodash';
import './timeline.scss';

export function createTimelineComponent(selectState, prefix, urls) {
  @connect(store => ({
    timeline: selectState(store)
  }), createActionCreators(createActionTypes(prefix), urls))
  class CoolTimeline extends React.Component {

    static propTypes = {
      timeline: PropTypes.object, // state

      // attributes
      timelineData: PropTypes.array,

      // actions
      fetchData: PropTypes.func
    };

    componentWillMount() {
      this.props.fetchData(selectState);
    }

    renderTimelines() {
      const elems = [];
      _.forEach(this.props.timeline.timelineElements, (elem) => {
        elems.push(<TimelineElem key={'tl-' + elem.id} timelineElem={elem} onClick={(elem) => this.props.clickElem(elem)}/>);
      });
      return elems;
    }

    render() {
      return (
        <div className="cool-timeline-root">
          {this.renderTimelines()}
        </div>
      );
    }
  }

  return CoolTimeline;
}
