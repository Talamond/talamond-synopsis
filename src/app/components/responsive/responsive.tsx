import { checkDeviceSize } from 'app/utils/responsiveHelper';
import React from 'react';

interface Props {
  mobile: React.ReactNode;
  pad: React.ReactNode;
  desktop: React.ReactNode;
  className: string;
}

function renderResponsive(mobile: React.ReactNode, pad: React.ReactNode, desktop: React.ReactNode) {
  const size = checkDeviceSize();
  if (size === 'mobile') {
    return mobile;
  } else if (size === 'pad') {
    return pad
  }
  return desktop;
}

export const Responsive = (props: Props) =>
  <div className={props.className}>
    {renderResponsive(props.mobile, props.pad, props.desktop)}
  </div>;
