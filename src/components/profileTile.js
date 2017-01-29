import React from 'react';
import './profileTile.scss';
import jon from '../assets/images/me.jpeg';

export const ProfileTile = () =>
  <div className="profile-tile-root">
    <div className="profile-tile img-box">
      <img src={jon}/>
    </div>
    <div className="profile-tile title-box">
      <div>Jonathan Sweetman</div>
      <div>Frontend Engineer</div>
    </div>
  </div>;
