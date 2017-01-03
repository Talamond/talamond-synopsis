import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {createActionCreators} from './timelineActionCreator.js';
import {createActionTypes} from './timelineActionTypes.js';
import {TimelineElem} from './timelineElemComponent.js';
import _ from 'lodash';
import './timeline.scss';
import {calculateLeft, calculateLength} from './timelineHelper.js';
import {createTagCloudComponent} from '../tagCloud/tagCloudComponent.js';
import {getTagCloudPrefix} from './timelineHelper.js';


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

    componentWillMount() {
      // todo make a tagCloud component for each element that needs one
      // each needs different prefix
      // TODO fragment helper?
      this.TagClouds = {};
      _.forEach(this.props.timeline.timelineElements, (elem, index) => {
        const tcPrefix = getTagCloudPrefix(prefix, elem.id);
        this.TagClouds[elem.id] = createTagCloudComponent((s) => {
          return selectState(s).fragments[tcPrefix];
        }, tcPrefix, {});
      });

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
        const TagCloud = this.TagClouds[elem.id];
        const tcElem = <TagCloud id={elem.id} data={elem.skills} height={100} width={100}/>;
        elems.push(<TimelineElem key={'tl-' + elem.id} timelineElem={elem} onClick={(elem) => this.props.clickElem(elem)} tagCloud={tcElem}/>);
      });
      _.forEach(this.props.timeline.timelineSpans, (tSpan, i) => {
        elems.push(<div className="timeline-span-row" key={'tlr-' + i}>{this.renderSpans(tSpan, i)}</div>);
      });
      return elems.concat(timeSpans);
    }

    render() {
      const {timeline, goToDate} = this.props;

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
