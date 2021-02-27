import React from 'react';
import ProgressiveImage from 'react-progressive-image';

require('./profileArea.css');

export const ProfileArea = () => {
  return <div className="profileArea">
    <ProgressiveImage src="/jsweetman/assets/images/mainpic.jpg" placeholder="/jsweetman/assets/images/mainpicSmall.jpg">
      {(src: string) => <img src={src} alt='an image of Jonathan Sweetman'/>}
    </ProgressiveImage>
    <div className="profileArea__profile">
      <div className="profileArea__jonwrapper">
        <img src="/jsweetman/assets/images/me.jpeg" className="profileArea__jon" />
      </div>
      <div className="profileArea__title">
        <h1>Jonathan Sweetman</h1>
        <h2>Front-end Developer</h2>
      </div>
    </div>
  </div>
};
