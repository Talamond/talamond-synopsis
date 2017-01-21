import React from 'react';
import MediaQuery from 'react-responsive';
import './header.scss';
import github from '../assets/images/github.svg';

function renderHeaders(headers) {
  const headerDivs = [];
  headers.forEach((header, i) => {
    headerDivs.push(<div key={`header-${i}`} className="header-elem" onClick={(e) => header.onClick(e)}>{header.label}</div>);
  });
  return headerDivs;
}

export const Header = ({headers}) =>
  <div className="header-root">
    {renderHeaders(headers)}
    <svg fill="#fff">>
      <use xlinkHref={github}/>
    </svg>
  </div>;
