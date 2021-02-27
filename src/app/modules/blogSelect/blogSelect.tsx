import React from "react";
import { FunctionComponent } from "react";
import { BLOGS } from "../blog/blogF";
import { BlogEntry } from "./blogEntry";

require('./blogSelect.css');

export const BlogSelect: FunctionComponent = () => {
  return <ul className="blogSelect">
    {BLOGS.reverse().map(blog => <BlogEntry key={blog.id} blogItem={blog} />)}
  </ul>;
};
