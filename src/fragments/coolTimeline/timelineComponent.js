import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {createActionCreators} from './timelineActionCreator.js';
import {createActionTypes} from './timelineActionTypes.js';
import {TimelineElem} from './timelineElemComponent.js';
import {TagCloud} from '../../components/tagCloudComponent.js';
import _ from 'lodash';
import './timeline.scss';
import bannerImg from '../../assets/images/Forest-in-greyscale.jpg';
import jon from '../../assets/images/me.jpeg';

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
      fetchData: PropTypes.func,
      selectTab: PropTypes.func
    };

    componentWillMount() {
      this.props.fetchData(selectState);
    }

    renderTimelines() {
      const {timeline: {timelineElements, selectedTabs}, selectTab} = this.props;
      const elems = [];
      _.forEach(timelineElements, (elem, index) => {
        let className = index % 2 ? 'odd' : 'even';
        if (elem.type === 'education') {
          className = 'education';
        }
        elems.push(<TimelineElem key={index}
                                 timelineElem={elem}
                                 onTabSelect={selectTab}
                                 selectedTab={selectedTabs[elem.id]}
                                 className={className}/>);
      });
      return elems;
    }

    render() {
      return (
        <div className="cool-timeline-root">
          <img src={bannerImg} className="timeline banner" />
          <img src={jon} className="timeline jon" />
          <TagCloud id="resume-summary" data={this.props.timeline.allSkills} height={740} width={1200} degrees={0} factor={2}/>
          {this.renderTimelines()}
        </div>
      );
    }
  }

  return CoolTimeline;
}
