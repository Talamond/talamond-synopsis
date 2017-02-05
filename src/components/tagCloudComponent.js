import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {D3TagCloud} from './d3TagCloud.js';
import './tagCloud.scss';
import OnVisible from 'react-on-visible';
import cn from 'classnames';

export class TagCloud extends React.Component {

  static propTypes = {
    id: PropTypes.string,
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
    this.state = {
      animate: false
    };
    this.createWords(this.props);
  }

  componentWillUpdate(nextProps) {
    this.createWords(nextProps);
  }

  render() {
    const {height, width, id, color, degrees} = this.props;
    const {animate} = this.state;
    return (
      <div className="tagcloud-root" key={`tagcloud-${id}`}>
        <OnVisible visibleClassName="animate" key={`tagcloudon-${id}`}>
          <D3TagCloud className={cn({animate})} selectId={`tagcloud-root-${id}`} degrees={degrees} words={this.wordElements} width={width}
                      height={height} color={color}/>
        </OnVisible>

      </div>
    );
  }
}
