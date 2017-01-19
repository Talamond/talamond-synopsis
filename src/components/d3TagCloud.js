import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import cloud from 'd3-cloud';
import * as d3 from "d3";
import _ from 'lodash';

export class D3TagCloud extends React.Component {

  static propTypes = {
    selectId: PropTypes.string,
    words: PropTypes.array,
    degrees: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,
    color: PropTypes.string
  };

  draw(words, color) {
    const fill = d3.schemeCategory20;
    const layout = this.layout;
    d3.select(`#${this.props.selectId}`).append("svg")
      .attr("width", layout.size()[0])
      .attr("height", layout.size()[1])
      .append("g")
      .attr("transform", "translate(" + layout.size()[0] / 2 + "," + layout.size()[1] / 2 + ")")
      .selectAll("text")
      .data(words)
      .enter().append("text")
      .style("font-size", function (d) {
        return d.size + "px";
      })
      .style("font-family", "Impact")
      .style("fill", function (d, i) {
        if (color) {
          return color;
        }
        return fill[i];
      })
      .attr("text-anchor", "middle")
      .attr("transform", function (d) {
        return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
      })
      .text(function (d) {
        return d.text;
      });
  }

  setLayout() {
    const {degrees, words, width, height, color} = this.props;
    this.layout = cloud()
      .size([width, height])
      .words(words)
      .padding(0)
      .rotate(() => (Math.random() * degrees))
      .font("Impact")
      .fontSize(function (d) {
        return d.size;
      })
      .random(() => 0.5)
      .on("end", (words) => this.draw(words, color));

    this.layout.start();
  }

  shouldComponentUpdate(nextProps) {
    // TODO only do this under certain circumstances
    // this.setLayout();
    if ((!this.props.words || this.props.words.length === 0) && nextProps.words && nextProps.words.length !== this.props.words.length) {
      return true;
    }
    return false;
  }

  componentDidUpdate() {
    this.setLayout();
  }

  componentDidMount() {
    if (this.props.words && this.props.words.length > 0) {
      this.setLayout();
    }
  }

  render() {
    return (
      <div id={this.props.selectId} className="d3tagcloud-root">
      </div>
    );
  }
}
