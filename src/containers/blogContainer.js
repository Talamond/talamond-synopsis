import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import { createActionTypes } from '../fragments/blog/blogSelectorActionTypes.js';
import { createActionCreators } from '../fragments/blog/blogSelectorActionCreator.js';
import { prefix } from '../reducers/blogReducer.js';
import { BlogSelector } from '../fragments/blog/blogSelectorComponent.js';

@connect(state => ({
	blog: state.blog
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

	render() {
		const BlogSelectorFrag = this.BlogSelectorFrag;

		return (
      <BlogSelectorFrag/>
		);
	}
}
