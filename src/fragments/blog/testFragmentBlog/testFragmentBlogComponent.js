import React, {PropTypes} from 'react';
import { BlogBase } from '../blog/blogBaseComponent.js';
import {browserHistory} from 'react-router'; // this needs to be imported because BlogBase uses it
import arrow from '../../../assets/images/arrow.svg';

// TODO for some reason browserHistory isn't working...

export class TestFragmentBlog extends BlogBase {
  renderContent() {
    return <div className="blog-base content">TestFragmentBlog</div>;
  }
  // renderNext(nextBlog) {
  //   if (!nextBlog.title) {
  //     return <div></div>;
  //   }
  //   return (<div className="blog-base next-area" onClick={() => browserHistory(nextBlog.path)}>
  //     <span>{nextBlog.title}</span>
  //     <svg>
  //       <use xlinkHref={arrow}/>
  //     </svg>
  //   </div>);
  // }
  //
  // renderBack(prevBlog) {
  //   if (!prevBlog.title) {
  //     return <div></div>;
  //   }
  //   return (<div className="blog-base back-area" onClick={() => browserHistory(prevBlog.path)}>
  //     <svg>
  //       <use xlinkHref={arrow}/>
  //     </svg>
  //     <span>{prevBlog.title}</span>
  //   </div>);
  // }
}
