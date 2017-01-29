import React, { Component, PropTypes } from 'react';
import cn from 'classnames';
import {TagCloud} from '../../components/tagCloudComponent.js';
import {TabArea} from '../../components/tabAreaComponent.js';
import {Responsive, checkDeviceSize} from '../../components/standardQuery.js';
import _ from 'lodash';
import { toString } from '../../utils/dateHelper.js';


export class TimelineElem extends Component {
  static propTypes = {
    timelineElem: PropTypes.object, // TODO shape
    selectedTab: PropTypes.number,
    onTabSelect: PropTypes.func,
    className: PropTypes.string
  };

  renderImage(timelineElem) {
    // This is hack cause the n8Identity logg is low res
    let image = <img src={timelineElem.image} className={this.props.className} />;
    if (timelineElem.employer === 'N8Identity') {
      image = <img src={timelineElem.image} className={this.props.className} style={{height: '20px', padding: '40px 0'}}/>;
    }
    /*
    else if (timelineElem.employer === 'IBM Canada') {
      image = (
        <svg width="300" height="150" viewBox="0 0 2000 1000">
          <use xlinkHref={timelineElem.image}/>
        </svg>
      );
    }
    */
    return <Responsive mobile={<div></div>} pad={image} desktop={image} />;
  }

  renderSkills(timelineElem) {
    const mobile = <TagCloud id={timelineElem.id} data={timelineElem.skills} height={300} width={300} factor={1.5}/>;
    const pad = <TagCloud id={timelineElem.id} data={timelineElem.skills} height={425} width={425} factor={1.5}/>;
    const desktop = <TagCloud id={timelineElem.id} data={timelineElem.skills} height={425} width={425} factor={1.5}/>;
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
      {name: 'Skills', content: this.renderSkills(timelineElem)},
      {name: 'Summary',  content: this.renderDescription(timelineElem.description)}
    ];
    if (timelineElem.descriptions) {
      _.forIn(timelineElem.descriptions, (v, k) => {
        tabContents.push({name: k, content: this.renderDescription(v)});
      });
    }
    return [
      this.renderImage(timelineElem),
      <TabArea tabContents={tabContents} className={className} selectedTab={selectedTab} onTabSelect={(tabIndex) => onTabSelect(timelineElem.id, tabIndex)}/>
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
