import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {createActionCreators} from './timelineActionCreator.js';
import {createActionTypes} from './timelineActionTypes.js';
import {TimelineElem} from './timelineElemComponent.js';
import {TagCloud} from '../../components/tagCloudComponent.js';
import _ from 'lodash';
import './timeline.scss';
import {Responsive, checkDeviceSize} from '../../components/standardQuery.js';
import ProgressiveImage from 'react-progressive-image';
import bannerImg from '../../assets/images/Forest-in-greyscale.jpg';
import bannerHolder from '../../assets/images/Forest-in-greyscale-small.jpg';
import schoolImg from '../../assets/images/UW_Building.jpg';
import schoolHolder from '../../assets/images/UW_Building-small.jpg';
import schoolImgMobile from '../../assets/images/UW_Building-mobile.jpg';
import schoolHolderMobile from '../../assets/images/UW_Building-small-mobile.jpg';
import jon from '../../assets/images/me.jpeg';
import cn from 'classnames';
import { toString } from '../../utils/dateHelper.js';

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
      this.props.fetchData();
    }

    renderEducation(elem) {
      let schoolImage, schoolImageSmall;
      if (checkDeviceSize() === 'mobile') {
        schoolImage = schoolImgMobile;
        schoolImageSmall = schoolHolderMobile;
      } else {
        schoolImage = schoolImg;
        schoolImageSmall = schoolHolder;
      }
      return (
        <div className="timeline education">
          <ProgressiveImage src={schoolImage} placeholder={schoolImageSmall}>
            {(src) => <img src={src} alt='an image of UW campus'/>}
          </ProgressiveImage>
          <Responsive className="timeline education-title" mobile={
            <div className="timeline education-title">
              <h1 className="job-title">Computer Science</h1>
              <h3 className="start-end-dates">{toString(elem.startDate)} - {toString(elem.endDate)}</h3>
              <img src={elem.image} className={cn('bigImage')} />
            </div>
          } desktop={
            <div className="timeline education-title">
              <h1 className="job-title">{elem.title}</h1>
              <h2 className="employer">{elem.subTitle}</h2>
              <h2 className="employer">{elem.employer}</h2>
              <h3 className="start-end-dates">{toString(elem.startDate)} - {toString(elem.endDate)}</h3>
              <img src={elem.image} className={cn('bigImage')} />
            </div>
          }/>
        </div>
      );
    }

    renderTimelines() {
      const {timeline: {timelineElements, selectedTabs}, selectTab} = this.props;
      const elems = [];
      _.forEach(timelineElements, (elem, index) => {
        let className = index % 2 ? 'odd' : 'even';
        if (elem.type === 'education') {
          elems.push(this.renderEducation(elem));
        } else {
          elems.push(<TimelineElem key={index}
                                   timelineElem={elem}
                                   onTabSelect={selectTab}
                                   selectedTab={selectedTabs[elem.id]}
                                   className={className}/>);
        }
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
              <div>Jonathan Sweetman</div>
              <div>Front-end Developer</div>
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
