import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {createActionCreators} from './tagCloudActionCreator.js';
import {createActionTypes} from './tagCloudActionTypes.js';
import _ from 'lodash';
import './tagCloud.scss';

export function createTagCloudComponent(selectState, prefix, urls) {
  @connect(store => ({
    tagCloud: selectState(store)
  }), createActionCreators(createActionTypes(prefix), urls))
  class TagCloud extends React.Component {

    static propTypes = {
      tagCloud: PropTypes.object, // state
      // attribtues
      data: PropTypes.array,
      // actions
      initialize: PropTypes.func
    };

    componentWillMount() {
      this.props.initialize(this.props.data);
    }

    render() {
      // TODO, seems reducer isnt properly hooked up
      // const {tagCloud: {elements}} = this.props;

      return (
        <div className="tagcloud-root">
          TagCloud
        </div>
      );
    }
  }

  return TagCloud;
}
