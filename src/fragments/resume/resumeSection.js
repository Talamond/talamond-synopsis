import React from 'react';

export const Section = ({id, title, expanded, content, onClick}) =>
  <div className="resume-section">
    <div className="section-title" onClick={() => onClick(id)}>{title}</div>
    <div className="section-content">{expanded ? content : null}</div>
  </div>;
