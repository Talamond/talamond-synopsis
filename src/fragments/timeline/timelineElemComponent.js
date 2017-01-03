import React, { Component, PropTypes } from 'react';
import {calculateLeft} from './timelineHelper.js';
import {TagCloud} from '../../components/tagCloudComponent.js';

export class TimelineElem extends Component {
  static propTypes = {
    timelineElem: PropTypes.object, // TODO shape
    onClick: PropTypes.function
  };

  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
  }

  render() {
    const {timelineElem, onClick } = this.props;
    if (timelineElem.expanded || this.state.expanded) {
      return (
        <div className="timeline-elem-wrapper" style={{left: calculateLeft(timelineElem.startDate)}}>
          <div className="timeline-elem grow"
               onClick={() => onClick(timelineElem)}>
            <div className="timeline-elem-date">{timelineElem.startDate.format('YYYY-MM-DD')}</div>
            <div className="timeline-elem-content">{timelineElem.content || timelineElem.summary || timelineElem.employer}</div>
            <TagCloud id={timelineElem.id} data={timelineElem.skills} height={100} width={100}/>
          </div>
        </div>
      );
    }
    return (
      <div className="timeline-elem-wrapper" style={{left: calculateLeft(timelineElem.startDate)}}>
        <div className="timeline-elem"
             onClick={() => onClick(timelineElem)}
             style={{backgroundColor: timelineElem.color}}
        >
        </div>
        <div className="timeline-elem-display-date">{timelineElem.startDate.format('YYYY-MM-DD')}</div>
      </div>
    );
  }
}
