import React, {PropTypes} from 'react';
import _ from 'lodash';
import {BlogEntry} from './blogEntry.js';
import './blogSelector.scss';
import { NAVIGATION } from '../../constants/navigation.js';
import {navigate} from '../../utils/navHelper.js';

export class BlogSelector extends React.Component {

  static propTypes = {
    blogSelector: PropTypes.object,
    blogs: PropTypes.array,

    // actions
    selectBlog: PropTypes.func
  };

  onReadMore(path, e) {
    navigate(e, `${NAVIGATION.BLOG.PATH}${path}`);
  }

  renderBlogs() {
    const blogElems = [];
    _.forEach(this.props.blogs, (blog) => {
      blogElems.push(<BlogEntry title={blog.title}
                                summary={blog.summary}
                                date={blog.date}
                                readMoreAction={(e) => this.onReadMore(blog.path, e)}/>);
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
