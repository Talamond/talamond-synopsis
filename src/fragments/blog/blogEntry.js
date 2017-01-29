import React from 'react';
import {toString} from '../../utils/dateHelper.js';
import './blogEntry.scss';
import {ProfileTile} from '../../components/profileTile.js';
import arrow from '../../assets/images/arrow.svg';

export const BlogEntry = ({title, summary, date}) =>
  <div className="blog-entry-root">
    <ProfileTile date={date}/>
    <div className="blog-entry title">{title}</div>
    <div className="blog-entry summary">{summary}</div>
    <div className="blog-entry show-more">
      <span>Read More</span>
      <svg>
        <use xlinkHref={arrow}/>
      </svg>
    </div>
  </div>;
