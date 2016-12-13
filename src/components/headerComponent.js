import React from 'react';
import MediaQuery from 'react-responsive';
import './header.scss';

function renderHeaders(headers) {
  const headerDivs = [];
  headers.forEach((header, i) => {
    headerDivs.push(<div key={`header-${i}`} className="header-elem" onClick={(e) => header.onClick(e)}>{header.label}</div>);
  });
  return headerDivs;
}

export const Header = ({headers}) =>
  <div className="header-root">
    <MediaQuery minDeviceWidth={1224}>
      {renderHeaders(headers)}
    </MediaQuery>
    <MediaQuery maxDeviceWidth={1224}>
      <div>hmm</div>
    </MediaQuery>
  </div>;
