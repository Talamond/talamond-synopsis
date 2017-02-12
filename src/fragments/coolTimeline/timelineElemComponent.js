import React, { Component, PropTypes } from 'react';
import cn from 'classnames';
import {TagCloud} from '../../components/tagCloudComponent.js';
import {TabArea} from '../../components/tabAreaComponent.js';
import {Responsive, checkDeviceSize} from '../../components/responsiveComponent.js';
import _ from 'lodash';
import { toString } from '../../utils/dateHelper.js';
import OnVisible from 'react-on-visible';

const NO_IMAGE_WIDTH = 1100;

export class TimelineElem extends Component {
  static propTypes = {
    timelineElem: PropTypes.object, // TODO shape
    selectedTab: PropTypes.number,
    onTabSelect: PropTypes.func,
    windowWidth: PropTypes.number,
    className: PropTypes.string
  };

  renderImage(timelineElem) {
    if (this.props.windowWidth < NO_IMAGE_WIDTH) {
      return null;
    }
    return <img key={`jobImage-${this.props.timelineElem.id}`} src={timelineElem.image} className={`${this.props.className} ${this.props.timelineElem.id === 4 ? 'sql' : ''}`} />;
  }

  renderDetails(timelineElem) {
    // determine font size based of details length
    return (<div className="timeline details">
      {_.map(timelineElem.details, (detail, index) => {
        return (
          <OnVisible key={index} visibleClassName="animate-detail">
            <div key={index} className="timeline detail">{detail}</div>
          </OnVisible>
        );
      })}
    </div>);
  }

  renderSkills(timelineElem) {
    const factor = timelineElem.skills.length < 7 ? 1 : 1.5;
    const mobile = <TagCloud id={'' + timelineElem.id} data={timelineElem.skills} height={280} width={280} factor={factor}/>;
    const pad = <TagCloud id={'' + timelineElem.id} data={timelineElem.skills} height={425} width={425} factor={factor}/>;
    const desktop = <TagCloud id={'' + timelineElem.id} data={timelineElem.skills} height={425} width={425} factor={factor}/>;
    return <Responsive mobile={mobile} pad={pad} desktop={desktop} />;
  }

  renderDescription(description) {
    // estimate font size when length is too long
    let fontSize = 22;
    let maxLength = 750;
    let divisor = 50;
    if (checkDeviceSize() === 'mobile') {
      fontSize = 14;
      maxLength = 500;
      divisor = 100;
    }
    if (description.length > maxLength) {
      fontSize = Math.ceil(fontSize - ((description.length - maxLength ) / divisor));
    }
    return <div className="description" style={{fontSize: fontSize + 'px'}}>{description}</div>;
  }

  renderContent() {
    const {timelineElem, selectedTab, onTabSelect, className} = this.props;
    if (timelineElem.type === 'education') {
      return <img src={timelineElem.image} className={cn('bigImage', className)} />;
    }
    const tabContents = [
      {name: 'Details', content: this.renderDetails(timelineElem)},
      {name: 'Skills', content: this.renderSkills(timelineElem)},
      {name: 'Desc',  content: this.renderDescription(timelineElem.description)}
    ];
    if (timelineElem.descriptions) {
      _.forIn(timelineElem.descriptions, (v, k) => {
        tabContents.push({name: k, content: this.renderDescription(v)});
      });
    }
    return [
      this.renderImage(timelineElem),
      <TabArea key={`tabArea-${this.props.timelineElem.id}`} tabContents={tabContents} className={className} selectedTab={selectedTab} onTabSelect={(tabIndex) => onTabSelect(timelineElem.id, tabIndex)}/>
    ];
  }

  render() {
    const {timelineElem, className} = this.props;
    return (
      <div className={cn('timeline-elem-outer', className)}>
        <h1 className="job-title">{timelineElem.title}</h1>
        <h2 className="employer">{timelineElem.employer}</h2>
        <h3 className="start-end-dates">{toString(timelineElem.startDate)} - {toString(timelineElem.endDate)}</h3>
        <div className={cn('timeline-elem-wrapper', timelineElem.type, className)}>
          {this.renderContent()}
        </div>
      </div>
    );
  }
}
