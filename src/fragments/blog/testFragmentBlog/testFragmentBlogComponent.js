import React, {PropTypes} from 'react';
import { BlogBase } from '../blog/blogBaseComponent.js';

export class TestFragmentBlog extends BlogBase {
  renderContent() {
    return <div className="blog-base content">TestFragmentBlog</div>;
  }
}
