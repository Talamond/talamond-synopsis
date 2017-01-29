import React, {PropTypes} from 'react';
import _ from 'lodash';
import {BlogEntry} from './blogEntry.js';
import './blogSelector.scss';
import { browserHistory } from 'react-router';
import { NAVIGATION } from '../../constants/navigation.js';

// TODO pass in blogs
export class BlogSelector extends React.Component {

  static propTypes = {
    blogSelector: PropTypes.object,
    blogs: PropTypes.array,

    // actions
    selectBlog: PropTypes.func
  };

  // TODO what if I'm holding ctrl?
  onReadMore(path) {
    browserHistory.push(`${NAVIGATION.BLOG.PATH}${path}`);
  }

  renderBlogs() {
    const blogElems = [];
    _.forEach(this.props.blogs, (blog) => {
      blogElems.push(<BlogEntry title={blog.title}
                                summary={blog.summary}
                                date={blog.date}
                                readMoreAction={() => this.onReadMore(blog.path)}/>);
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
