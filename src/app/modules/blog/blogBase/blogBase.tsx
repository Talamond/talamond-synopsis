import { ProfileTile } from "app/components/profileTile/profileTile";
import { navigate } from "app/utils/navHelper";
import React from "react";
import { FunctionComponent } from "react";
import { useHistory } from "react-router";
import { BlogItem } from "../blogF";

require('./blogBase.css');

const ArrowLeft = require('../../../../jsweetman/assets/images/arrow-left.svg');
const ArrowRight = require('../../../../jsweetman/assets/images/arrow-right.svg');

interface Props {
  blog: BlogItem;
  prevBlog?: BlogItem;
  nextBlog?: BlogItem;
}

export const BlogBase: FunctionComponent<Props> = ({blog, nextBlog, prevBlog}: Props) => {
  const {title, date, content} = blog;
  const history = useHistory();
  return <div className="blogBase"><div className="blogBase__inner">
    <div className="blogBase__titleArea">
      <ProfileTile date={date} />
      <div className="blogBase__title">{title}</div>
    </div>
    <div className="blogBase__content">{content}</div>
    <div className="blogBase__navigation">
      {prevBlog && <a className="blogBase__backArea" onClick={(e) => navigate(e, prevBlog.path, history)}>
        <ArrowLeft />
        <span>{prevBlog.title}</span>
      </a>}
      {!prevBlog && <div/>}
      {nextBlog && <a className="blogBase__nextArea" onClick={(e) => navigate(e, nextBlog.path, history)}>
        <span className="blogBase__nextText">{nextBlog.title}</span>
        <ArrowRight />
      </a>}
      {!nextBlog && <div/>}
    </div>
  </div></div>;
};
