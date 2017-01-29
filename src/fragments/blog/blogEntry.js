import React from 'react';
import {toString} from '../../utils/dateHelper.js';
import './blogEntry.scss';

export const BlogEntry = ({title, summary, date}) =>
  <div className="blog-entry-root">
    <div className="blog-entry title">{title}</div>
    <div className="blog-entry date">{toString(date)}</div>
    <div className="blog-entry summary">{summary}</div>
    <div className="blog-entry show-more">Show More...</div>
  </div>;
