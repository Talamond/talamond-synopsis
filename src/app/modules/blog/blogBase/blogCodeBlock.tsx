import React, { FunctionComponent } from "react";

require('./blogCodeBlock.css');

interface Props {
  rows: number;
}

export const BlogCodeBlock: FunctionComponent<Props> = ({rows, children}) => {
  return <textarea className="blogCodeBlock" rows={rows} disabled>{children}</textarea>
};
