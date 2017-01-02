import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {createActionCreators} from './tagCloudActionCreator.js';
import {createActionTypes} from './tagCloudActionTypes.js';
import cloud from 'd3-cloud';
import * as d3 from "d3";
import _ from 'lodash';
import './tagCloud.scss';

export class D3TagCloud extends React.Component {

    static propTypes = {
        words: PropTypes.array,
        degrees: PropTypes.number
    };

    draw(words) {
        const fill = d3.schemeCategory20;
        const layout = this.layout;
        d3.select(".d3tagcloud-root").append("svg")
            .attr("width", layout.size()[0])
            .attr("height", layout.size()[1])
            .append("g")
            .attr("transform", "translate(" + layout.size()[0] / 2 + "," + layout.size()[1] / 2 + ")")
            .selectAll("text")
            .data(words)
            .enter().append("text")
            .style("font-size", function(d) { return d.size + "px"; })
            .style("font-family", "Impact")
            .style("fill", function(d, i) { return fill[i]; })
            .attr("text-anchor", "middle")
            .attr("transform", function(d) {
                return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
            })
            .text(function(d) { return d.text; });
    }

    shouldComponentUpdate() {
        return true;
    }

    componentDidMount() {
        const { degrees, words } = this.props;
        this.layout = cloud()
            .size([100, 100])
            .words(words.map((w) => {return {text: w.label, size: 2 * w.weight};}))
            .padding(0)
            .rotate(() => ~~(Math.random() * 2) * degrees)
            .font("Impact")
            .fontSize(function(d) { return d.size; })
            .on("end", (words) => this.draw(words));

        this.layout.start();
    }

    render() {
        return (
            <div className="d3tagcloud-root">
            </div>
        );
    }
}
