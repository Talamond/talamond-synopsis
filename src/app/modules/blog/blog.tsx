import React, { FunctionComponent } from "react";
import { Route } from "react-router";
import { BlogBase } from "./blogBase/blogBase";
import { BLOGS } from "./blogF";

export const Blog: FunctionComponent = () => {

  return <>
    {BLOGS.map((blog, i) =>
      <Route
        key={blog.path}
        exact
        path={blog.path}
        render={() => <BlogBase
          key={blog.id}
          blog={blog}
          prevBlog={i - 1 >= 0 ? BLOGS[i-1] : undefined}
          nextBlog={i + 1 < BLOGS.length ? BLOGS[i+1] : undefined}
        /> }
    />)}
  </>;
};
