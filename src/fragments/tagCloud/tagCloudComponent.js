import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {createActionCreators} from './tagCloudActionCreator.js';
import {createActionTypes} from './tagCloudActionTypes.js';
import { D3TagCloud } from './d3TagCloud.js';
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
      // TODO fetch tags from node
      this.props.initialize(this.props.data);
    }

    render() {
      // TODO, seems reducer isnt properly hooked up

      return (
        <div className="tagcloud-root">
          <D3TagCloud degrees={0} words={this.props.data}/>
        </div>
      );
    }
  }

  return TagCloud;
}
