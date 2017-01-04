import React from 'react';

export const Section = ({id, title, expanded, content, onClick}) =>
  <div className="resume-section">
    <div className="title-area" onClick={() => onClick(id)}>
      <div className="title">{title}</div>
      <div className="chevron-container"><span className={`chevron ${expanded ? 'bottom' : ''}`}/></div>
    </div>
    <div className="section-content">{expanded ? content : null}</div>
  </div>;
