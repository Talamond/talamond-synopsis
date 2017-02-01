import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {createActionCreators} from './timelineActionCreator.js';
import {createActionTypes} from './timelineActionTypes.js';
import {TimelineElem} from './timelineElemComponent.js';
import {TagCloud} from '../../components/tagCloudComponent.js';
import _ from 'lodash';
import './timeline.scss';
import ProgressiveImage from 'react-progressive-image';
import bannerImg from '../../assets/images/Forest-in-greyscale.jpg';
import bannerHolder from '../../assets/images/Forest-in-greyscale-small.jpg';
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
      selectTab: PropTypes.func,
      changeDimensions: PropTypes.func
    };

    // listen to window resize and force an update so the tag clouds will redraw their proper size relative to the windows
    // as well as anything else
    componentDidMount() {
      window.addEventListener("resize", () => this.props.changeDimensions(window.innerWidth, window.innerHeight));
    }

    componentWillUnmount() {
      window.removeEventListener("resize", () => this.props.changeDimensions(window.innerWidth, window.innerHeight));
    }

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
      const { summaryWidth, summaryHeight } = this.props.timeline;
      let factor;
      if (summaryWidth > summaryHeight) {
        factor = summaryWidth * 1.0 / summaryHeight;
      } else {
        factor = summaryHeight * 1.0 / summaryWidth;
      }
      return (
        <div className="cool-timeline-root">
          <ProgressiveImage src={bannerImg} placeholder={bannerHolder}>
            {(src) => <img src={src} alt='an image'/>}
          </ProgressiveImage>
          <div className="timeline profile">
            <div className="timeline jonwrapper">
              <img src={jon} className="timeline jon" />
            </div>
            <div className="timeline title">
              <div key="frontendengineer">Front end engineer</div>
              <div>and much more...</div>
            </div>
          </div>
          <TagCloud id="resume-summary"
                    data={this.props.timeline.allSkills}
                    height={summaryHeight}
                    width={summaryWidth}
                    degrees={0}
                    factor={2}/>
          {this.renderTimelines()}
        </div>
      );
    }
  }

  return CoolTimeline;
}
