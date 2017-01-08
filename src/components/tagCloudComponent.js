import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {D3TagCloud} from './d3TagCloud.js';

export class TagCloud extends React.Component {

  static propTypes = {
    id: PropTypes.object,
    data: PropTypes.array,
    width: PropTypes.number,
    height: PropTypes.number,
    color: PropTypes.string
  };

  createWords(props) {
    const {data, width, height} = props;
    const totalArea = width * height;
    const elems = [];
    let sum = 0;
    if (data) {
      // First calculate the total height of the sums
      data.forEach((word) => {
        sum = sum + word.weight;
      });
      // Then calculate the height of each element
      data.forEach((word) => {
        const size = Math.floor((word.weight / sum) * height);
        elems.push({text: word.label, size});
      });
    }
    this.wordElements = elems;
  }

  componentWillMount() {
    this.createWords(this.props);
  }

  componentWillUpdate(nextProps) {
    this.createWords(nextProps);
  }

  render() {
    const {height, width, id, color} = this.props;
    return (
      <div className="tagcloud-root">
        <D3TagCloud selectId={`tagcloud-root-${id}`} degrees={0} words={this.wordElements} width={width}
                    height={height} color={color}/>
      </div>
    );
  }
}
