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
      // attributes
      id: PropTypes.number,
      data: PropTypes.array,
      width: PropTypes.number,
      height: PropTypes.number,
      // actions
      initialize: PropTypes.func
    };

    componentWillMount() {
      const {data, width, height, initialize} = this.props;
      initialize(data, width, height);
    }

    render() {
      // TODO, seems reducer isnt properly hooked up
      const { height, width, id, tagCloud: { wordElements } } = this.props;
      return (
        <div className="tagcloud-root">
          <D3TagCloud selectId={`tagcloud-root-${id}`} degrees={0} words={wordElements} width={width} height={height} />
        </div>
      );
    }
  }

  return TagCloud;
}