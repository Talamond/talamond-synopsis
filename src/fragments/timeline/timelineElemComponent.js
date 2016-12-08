import React, { Component, PropTypes } from 'react';
import {calculateLeft} from './timelineHelper.js';

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

  onHover() {
    // this.setState({expanded: true});
  }

  onExit() {
    // this.setState({expanded: false});
  }

  render() {
    const {timelineElem, onClick} = this.props;
    if (timelineElem.expanded || this.state.expanded) {
      return (
        <div className="timeline-elem-wrapper" style={{right: calculateLeft(timelineElem.startDate)}}>
          <div className="timeline-elem grow"
               onMouseOut={() => this.onExit(timelineElem)}
               onClick={() => onClick(timelineElem)}>
            <div className="timeline-elem-date">{timelineElem.startDate.format('YYYY-MM-DD')}</div>
            <div className="timeline-elem-content">{timelineElem.content}</div>
          </div>
        </div>
      );
    }
    return (
      <div className="timeline-elem-wrapper" style={{left: calculateLeft(timelineElem.startDate)}}>
        <div className="timeline-elem"
             onMouseOver={() => this.onHover(timelineElem)}
             onClick={() => onClick(timelineElem)}>
        </div>
        <div className="timeline-elem-display-date">{timelineElem.startDate.format('YYYY-MM-DD')}</div>
      </div>
    );
  }
}
