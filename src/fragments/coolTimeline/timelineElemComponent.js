import React, { Component, PropTypes } from 'react';
import cn from 'classnames';
import {TagCloud} from '../../components/tagCloudComponent.js';
import {TabArea} from '../../components/tabAreaComponent.js';

const DATE_FORMAT = 'YYYY-MM-DD';

export class TimelineElem extends Component {
  static propTypes = {
    timelineElem: PropTypes.object, // TODO shape
    selectedTab: PropTypes.number,
    onTabSelect: PropTypes.func,
    className: PropTypes.string
  };

  renderImage(timelineElem) {
    // This is hack cause the n8Identity logg is low res
    if (timelineElem.employer === 'N8Identity') {
      return <img src={timelineElem.image} className={this.props.className} style={{height: '20px', padding: '40px 0'}}/>;
    }
    return <img src={timelineElem.image} className={this.props.className} />;
  }

  renderSkills(timelineElem) {
    return <TagCloud id={timelineElem.id} data={timelineElem.skills} height={400} width={400} color="#aec7e8"/>;
  }

  renderDescription(timelineElem) {
    return <div className="description">{timelineElem.description}</div>;
  }

  renderContent() {
    const {timelineElem, selectedTab, onTabSelect, className} = this.props;
    if (timelineElem.type === 'education') {
      return <img src={timelineElem.image} className={cn('bigImage', className)} />;
    }
    const tabContents = [
      {name: 'Skills', content: this.renderSkills(timelineElem)},
      {name: 'Description',  content: this.renderDescription(timelineElem)}
    ];
    return [
      this.renderImage(timelineElem),
      <TabArea tabContents={tabContents} className={className} selectedTab={selectedTab} onTabSelect={(tabIndex) => onTabSelect(timelineElem.id, tabIndex)}/>
    ];
  }

  render() {
    const {timelineElem, className} = this.props;
    return (
      <div className={cn('timeline-elem-outer', className)}>
        <div className="job-title">{timelineElem.title}</div>
        <div className="employer">{timelineElem.employer}</div>
        <div className="start-end-dates">{timelineElem.startDate.format(DATE_FORMAT)} - {timelineElem.endDate.format(DATE_FORMAT)}</div>
        <div className={cn('timeline-elem-wrapper', className)}>
          {this.renderContent()}
        </div>
      </div>
    );
  }
}
