import React, { FunctionComponent } from "react";

require('./blogParagraph.css');

export const BlogParagraph: FunctionComponent = ({children}) => {
  return <div className="blogParagraph">{children}</div>
};
