import React, { FunctionComponent } from "react";

require('./blogParagraphTitle.css');

export const BlogParagraphTitle: FunctionComponent = ({children}) => {
  return <div className="blogParagraphTitle">{children}</div>
};
