import React, {PropTypes} from 'react';
import _ from 'lodash';
import { blogs } from './blogs.js';
import {BlogEntry} from './blogEntry.js';
import './blogSelector.scss';

export class BlogSelector extends React.Component {

  static propTypes = {
    blogSelector: PropTypes.object,

    // actions
    selectBlog: PropTypes.func
  };

  renderBlogs() {
    const blogElems = [];
    _.forEach(blogs, (blog) => {
      blogElems.push(<BlogEntry title={blog.title} summary={blog.summary} date={blog.date}/>);
    });
    return blogElems;
  }

  render() {
    return (
      <div className="blog-selector-root">
        {this.renderBlogs()}
      </div>
    );
  }
}
