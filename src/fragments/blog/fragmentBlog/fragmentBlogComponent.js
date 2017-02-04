import React, {PropTypes} from 'react';
import { BlogBase } from '../blog/blogBaseComponent.js';
import {browserHistory} from 'react-router'; // this needs to be imported because BlogBase uses it... that kinda sucks

export class FragmentBlog extends BlogBase {
  renderContent() {
    return <div className="blog-base content">FragmentBlog</div>;
  }
}
