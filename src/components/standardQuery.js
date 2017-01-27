import React from 'react';
import MediaQuery from 'react-responsive';
import './header.scss';
/*
@media only screen and (min-device-width : 320px) and (max-device-width : 479px) {
  border: 2px solid $neutral;
}
@media only screen and (min-device-width : 480px) and (max-device-width : 767px) {
  border: 3px solid $neutral;
}
@media only screen and (min-device-width : 768px) and (max-device-width : 1999px) {
  border: 5px solid $neutral;
}
*/

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
    <MediaQuery minDeviceWidth={320} maxDeviceWidth={479}>
      {mobile}
    </MediaQuery>
    <MediaQuery minDeviceWidth={480} maxDeviceWidth={767}>
      {pad}
    </MediaQuery>
    <MediaQuery minDeviceWidth={768} maxDeviceWidth={1999}>
      {desktop}
    </MediaQuery>
  </div>;
