import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {createActionCreators} from './resumeActionCreator.js';
import {createActionTypes} from './resumeActionTypes.js';
import {TagCloud} from '../../components/tagCloudComponent.js';
import {Section} from './resumeSection.js';
import _ from 'lodash';
import './resume.scss';

export function createResumeComponent(selectState, prefix, urls) {
  @connect(store => ({
    resume: selectState(store)
  }), createActionCreators(createActionTypes(prefix), urls))
  class Resume extends React.Component {

    static propTypes = {
      resume: PropTypes.object, // state
      // actions
      fetchData: PropTypes.func,
      expandSection: PropTypes.func
    };

    componentWillMount() {
      this.props.fetchData();
    }

    renderSummary() {
      return (
        <TagCloud id="resume-summary" data={this.props.resume.allSkills} height={400} width={400}/>
      );
    }

    renderEducation() {
      const {educationData} = this.props.resume;
      const educations = [];
      _.forEach(educationData, (e, i) => {
        educations.push(<div key={i}>{e.summary}</div>);
      });
      return educations;
    }

    renderWorkDetails(job) {
      return <div>Work Details</div>;
    }

    renderWorkExperience() {
      const {resume: {expandedSections, jobData}, expandSection} = this.props;
      const jobs = [];
      _.forEach(jobData, (j, i) => {
        jobs.push(<Section
          id={`job${i}`}
          key={`job${i}`}
          expanded={expandedSections[`job${i}`]}
          title={j.title}
          content={this.renderWorkDetails(j)}
          onClick={(section) => expandSection(section)}
        />);
      });
      return jobs;
    }

    renderPersonal() {
      return <div>Personal</div>;
    }

    render() {
      const {resume: {expandedSections}, expandSection} = this.props;
      return (
        <div className="resume-root">
          <Section id="summary"
                   expanded={expandedSections.summary}
                   title="SUMMARY OF QUALIFICATIONS"
                   content={this.renderSummary()}
                   onClick={(section) => expandSection(section)}/>
          <Section id="education"
                   expanded={expandedSections.education}
                   title="EDUCATION"
                   content={this.renderEducation()}
                   onClick={(section) => expandSection(section)}/>
          <Section id="work"
                   expanded={expandedSections.work}
                   title="WORK EXPERIENCE"
                   content={this.renderWorkExperience()}
                   onClick={(section) => expandSection(section)}/>
          <Section id="personal"
                   expanded={expandedSections.personal}
                   title="PERSONAL"
                   content={this.renderPersonal()}
                   onClick={(section) => expandSection(section)}/>
        </div>
      );
    }
  }

  return Resume;
}
