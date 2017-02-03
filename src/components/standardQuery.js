import React from 'react';
import MediaQuery from 'react-responsive';
import './header.scss';

export function checkDeviceSize() {
  if (window.innerWidth < 479) {
    return 'mobile';
  } else if (window.innerWidth < 767) {
    return 'pad';
  }
  return 'desktop';
}

//TODO, do I really want an absolute minWidth?
export const Responsive = ({mobile, pad, desktop, className}) =>
  <div className={className}>
    <MediaQuery key="mobile" minDeviceWidth={320} maxDeviceWidth={479}>
      {mobile}
    </MediaQuery>
    <MediaQuery key="pad" minDeviceWidth={480} maxDeviceWidth={767}>
      {pad || desktop}
    </MediaQuery>
    <MediaQuery key="desktop" minDeviceWidth={768} maxDeviceWidth={1999}>
      {desktop}
    </MediaQuery>
  </div>;
