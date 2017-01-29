import React from 'react';
import './profileTile.scss';
import jon from '../assets/images/me.jpeg';
import {toString} from '../utils/dateHelper.js';

export const ProfileTile = ({date}) =>
  <div className="profile-tile-root">
    <div className="profile-tile img-box">
      <img src={jon}/>
    </div>
    <div className="profile-tile title-box">
      <div className="profile-tile name">Jonathan Sweetman</div>
      <div className="profile-tile title">Front End Engineer</div>
      {date && <div className="profile-tile title">{toString(date)}</div>}
    </div>
  </div>;
