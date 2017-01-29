import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import { createActionTypes } from '../fragments/blog/blogSelectorActionTypes.js';
import { createActionCreators } from '../fragments/blog/blogSelectorActionCreator.js';
import { prefix } from '../reducers/blogReducer.js';
import { BlogSelector } from '../fragments/blog/blogSelectorComponent.js';
import { NAVIGATION } from '../constants/navigation.js';
import { blogs } from '../fragments/blog/blogs.js';
import { FragmentBlog } from '../fragments/blog/fragmentBlog/fragmentBlogComponent.js';
import { TestFragmentBlog } from '../fragments/blog/testFragmentBlog/testFragmentBlogComponent.js';
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

  renderBlog(id) {
	  if (id === 'fragment') {
	    return <FragmentBlog/>;
    } else if (id === 'testingFragment') {
	    return <TestFragmentBlog/>;
    }
  }

	render() {
	  // TODO this is a bit weird... I wonder if there's a better way to do it without having
    // a container for each blog?
		const BlogSelectorFrag = this.BlogSelectorFrag;
	  const { location: {pathname}, blog: {blogs} } = this.props;
	  if (pathname === NAVIGATION.BLOG.PATH) {
      return <BlogSelectorFrag/>;
    }
    for (let i = 0; i < blogs.length; i++) {
      const b = blogs[i];
      if (pathname.endsWith(b.path)) {
        return this.renderBlog(b.id);
      }
    }
    
		return (
      <BlogSelectorFrag/>
		);
	}
}
