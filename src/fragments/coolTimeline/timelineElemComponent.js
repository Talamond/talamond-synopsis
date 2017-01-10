import React, { Component, PropTypes } from 'react';
import {calculateLeft} from './timelineHelper.js';
import {TagCloud} from '../../components/tagCloudComponent.js';
import {TabArea} from '../../components/tabAreaComponent.js';

export class TimelineElem extends Component {
  static propTypes = {
    timelineElem: PropTypes.object, // TODO shape
    selectedTab: PropTypes.number,
    onTabSelect: PropTypes.func
  };

  renderImage(timelineElem) {
    // This is hack cause the n8Identity logg is low res
    if (timelineElem.employer === 'N8Identity') {
      return <img src={timelineElem.image} style={{height: '20px', padding: '40px 0'}}/>;
    }
    return <img src={timelineElem.image} />;
  }

  renderSkills(timelineElem) {
    return <TagCloud id={timelineElem.id} data={timelineElem.skills} height={200} width={200} color="#aec7e8"/>;
  }

  renderDescription(timelineElem) {
    return <div className="description">{timelineElem.description}</div>;
  }

  render() {
    const {timelineElem, selectedTab, onTabSelect} = this.props;
    const tabContents = [
      {name: 'Skills', content: this.renderSkills(timelineElem)},
      {name: 'Description',  content: this.renderDescription(timelineElem)}
    ];

    return (
      <div className="timeline-elem-wrapper">
        {this.renderImage(timelineElem)}
        <TabArea tabContents={tabContents} selectedTab={selectedTab} onTabSelect={(tabIndex) => onTabSelect(timelineElem.id, tabIndex)}/>
      </div>
    );
  }
}
