import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {createActionCreators} from './timelineActionCreator.js';
import {createActionTypes} from './timelineActionTypes.js';
import {TimelineElem} from './timelineElemComponent.js';
import _ from 'lodash';
import './timeline.scss';
import {calculateLeft, calculateLength} from './timelineHelper.js';
import {getTagCloudPrefix} from './timelineHelper.js';


export function createTimelineComponent(selectState, prefix, urls) {
  @connect(store => ({
    timeline: selectState(store)
  }), createActionCreators(createActionTypes(prefix), urls))
  class Timeline extends React.Component {

    static propTypes = {
      timeline: PropTypes.object, // state

      // attributes
      timelineData: PropTypes.array,
      // actions
      goToDate: PropTypes.func,
      clickElem: PropTypes.func,
      fetchData: PropTypes.func
    };

    componentWillMount() {
      this.props.fetchData(selectState);
    }

    renderSpans(spans, rowIndex) {
      const elems = [];
      let totalLength = 0;
      _.forEach(spans, (span, i) => {
        const elemLength = calculateLength(span.startDate, span.endDate);
        const elemLeft = calculateLeft(span.startDate, span.endDate);
        elems.push(<div key={'tlrs-' + i + '-' + rowIndex} className="timeline-span"
                        style={{
                          width: elemLength + 'px',
                          left: elemLeft + 'px',
                          "backgroundColor": span.color
                        }}/>);
      });
      return elems;
    }

    renderTimelines() {
      const elems = [];
      const timeSpans = []
      _.forEach(this.props.timeline.timelineElements, (elem) => {
        elems.push(<TimelineElem key={'tl-' + elem.id} timelineElem={elem} onClick={(elem) => this.props.clickElem(elem)}/>);
      });
      _.forEach(this.props.timeline.timelineSpans, (tSpan, i) => {
        elems.push(<div className="timeline-span-row" key={'tlr-' + i}>{this.renderSpans(tSpan, i)}</div>);
      });
      return elems.concat(timeSpans);
    }

    render() {
      return (
        <div className="timeline-root">
          <div className="timeline-line"/>
          {this.renderTimelines()}
        </div>
      );
    }
  }

  return Timeline;
}
