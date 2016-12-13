import React from 'react';
import './tagCloud.scss';
import _ from 'lodash';

function renderWords(words, width, height) {
  const wordElems = [];
  _.forEach(words, (word) => {
    wordElems.push(<div className="tag-cloud-word" style={{fontSize: (word.weight * 2) + 'px'}}>{word.label}</div>);
  });
  return wordElems;
}

export const TagCloud = ({words, width, height, className}) =>
  <div className={`tag-cloud-root ${className}`} style={{width, height}}>
    {renderWords(words, width, height)}
  </div>;
