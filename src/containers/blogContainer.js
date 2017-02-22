import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {createActionTypes} from '../fragments/blog/blogSelectorActionTypes.js';
import {createActionCreators} from '../fragments/blog/blogSelectorActionCreator.js';
import {prefix} from '../reducers/blogReducer.js';
import {BlogSelector} from '../fragments/blog/blogSelectorComponent.js';
import {NAVIGATION} from '../constants/navigation.js';
import {FragmentBlog} from '../fragments/blog/fragmentBlog/fragmentBlogComponent.js';
import {TestFragmentBlog} from '../fragments/blog/testFragmentBlog/testFragmentBlogComponent.js';
import {AboutMeBlog} from '../fragments/blog/aboutMeBlog/aboutMeBlogComponent.js';
import {WebsiteBlog} from '../fragments/blog/websiteBlog/websiteBlogComponent.js';
import {ReactBlog} from '../fragments/blog/reactBlog/reactBlogComponent.js';
import _ from 'lodash';

@connect(state => ({
  blog: state.blog.root
}))
export class BlogContainer extends React.Component {
  static propTypes = {
    // router
    location: PropTypes.object,
    params: PropTypes.object,
    route: PropTypes.object,
    routeParams: PropTypes.object,
    routes: PropTypes.array,

    blog: PropTypes.object
  };

  componentWillMount() {
    // todo, this function go in redux-fragment?
    const enhance = connect(store => ({
      blogSelector: (store) => store.blog.fragments.blogSelector
    }), createActionCreators(createActionTypes(prefix)));
    this.BlogSelectorFrag = enhance(BlogSelector);
  }

  componentWillReceiveProps(nextProps) {
    console.log('nextprops');
  }

  renderBlog(blog, blogs, index) {
    let nextBlog = {};
    let prevBlog = {};
    if (index > 0) {
      nextBlog = blogs[index - 1];
    }
    if (index < blogs.length - 1) {
      prevBlog = blogs[index + 1];
    }
    if (blog.id === blogs[4].id) {
      return <FragmentBlog title={blog.title} date={blog.date} nextBlog={nextBlog} prevBlog={prevBlog}/>;
    } else if (blog.id === blogs[3].id) {
      return <TestFragmentBlog title={blog.title} date={blog.date} nextBlog={nextBlog} prevBlog={prevBlog}/>;
    } else if (blog.id === blogs[2].id) {
      return <WebsiteBlog title={blog.title} date={blog.date} nextBlog={nextBlog} prevBlog={prevBlog}/>;
    } else if (blog.id === blogs[1].id) {
      return <AboutMeBlog title={blog.title} date={blog.date} nextBlog={nextBlog} prevBlog={prevBlog}/>;
    } else if (blog.id === blogs[0].id) {
      return <ReactBlog title={blog.title} date={blog.date} nextBlog={nextBlog} prevBlog={prevBlog}/>;
    }
    return <BlogSelectorFrag blogs={blogs}/>;
  }

  render() {
    // TODO this is a bit weird... I wonder if there's a better way to do it without having
    // a container for each blog?
    const BlogSelectorFrag = this.BlogSelectorFrag;
    const {location: {pathname}, blog: {blogs}} = this.props;
    if (pathname === NAVIGATION.BLOG.PATH) {
      return <BlogSelectorFrag blogs={blogs}/>;
    }
    for (let i = 0; i < blogs.length; i++) {
      const blog = blogs[i];
      if (pathname.includes(blog.path)) {
        return this.renderBlog(blog, blogs, i);
      }
    }

    return (
      <BlogSelectorFrag blogs={blogs}/>
    );
  }
}
