import React from 'react';
import MediaQuery from 'react-responsive';
import './footer.scss';
/*
 footers:[
 {
 label
 onClick
 }
 ]
 */

/* eslint-disable */
function renderFooters(footers) {
  return [];
}

export const Footer = ({footers}) =>
  <div className="footer-root">
    <MediaQuery minDeviceWidth={1224}>
      {renderFooters(footers)}
    </MediaQuery>
    <MediaQuery maxDeviceWidth={1224}>
      <div>hmm</div>
    </MediaQuery>
  </div>;
