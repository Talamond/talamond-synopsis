import React from 'react';

export function checkDeviceSize() {
  if (window.innerWidth < 479) {
    return 'mobile';
  } else if (window.innerWidth < 767) {
    return 'pad';
  }
  return 'desktop';
}


function renderResponsive(mobile, pad, desktop) {
  const size = checkDeviceSize();
  if (size === 'mobile') {
    return mobile;
  } else if (size === 'pad') {
    return pad
  }
  return desktop;
}

export const Responsive = ({mobile, pad, desktop, className}) =>
  <div className={className}>
    {renderResponsive(mobile, pad, desktop)}
  </div>;
