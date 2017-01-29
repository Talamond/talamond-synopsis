import React, {PropTypes} from 'react';
import { BlogBase } from '../blog/blogBaseComponent.js';

export class FragmentBlog extends BlogBase {
  renderContent() {
    return <div className="blog-base content">FragmentBlog</div>;
  }
}
