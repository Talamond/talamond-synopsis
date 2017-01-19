import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {D3TagCloud} from './d3TagCloud.js';

export class TagCloud extends React.Component {

  static propTypes = {
    id: PropTypes.object,
    data: PropTypes.array,
    width: PropTypes.number,
    height: PropTypes.number,
    color: PropTypes.string,
    degrees: PropTypes.number,
    factor: PropTypes.number
  };

  static defaultProps = {
    degrees: 0,
    factor: 1.2
  };

  createWords(props) {
    const {data, width, height, factor} = props;
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
        const size = Math.floor((word.weight / sum) * height) * factor;
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
    const {height, width, id, color, degrees} = this.props;
    return (
      <div className="tagcloud-root">
        <D3TagCloud selectId={`tagcloud-root-${id}`} degrees={degrees} words={this.wordElements} width={width}
                    height={height} color={color}/>
      </div>
    );
  }
}
