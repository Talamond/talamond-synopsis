import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {createActionCreators} from './resumeActionCreator.js';
import {createActionTypes} from './resumeActionTypes.js';
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
      fetchData: PropTypes.func
    };

    componentWillMount() {
      this.props.fetchData();
    }

    render() {
      return (
        <div className="resume-root">
          resume root
        </div>
      );
    }
  }

  return Resume;
}
