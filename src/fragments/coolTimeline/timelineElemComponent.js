import React, { Component, PropTypes } from 'react';
import {calculateLeft} from './timelineHelper.js';
import {TagCloud} from '../../components/tagCloudComponent.js';

export class TimelineElem extends Component {
  static propTypes = {
    timelineElem: PropTypes.object // TODO shape
  };

  renderImage(timelineElem) {
    // This is hack cause the n8Identity logg is low res
    if (timelineElem.employer === 'N8Identity') {
      return <img src={timelineElem.image} style={{height: '20px', padding: '40px 0'}}/>;
    }
    return <img src={timelineElem.image} />;
  }

  render() {
    const {timelineElem} = this.props;
    return (
      <div className="timeline-elem-wrapper" style={{left: calculateLeft(timelineElem.startDate)}}>
        {this.renderImage(timelineElem)}
        <TagCloud id={timelineElem.id} data={timelineElem.skills} height={100} width={100} color="#aec7e8"/>
        <span className="description">{timelineElem.description}</span>
        <div className="timeline-elem-display-date">{timelineElem.startDate.format('YYYY-MM-DD')}</div>
      </div>
    );
  }
}
