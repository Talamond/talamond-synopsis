import { ProfileTile } from "app/components/profileTile/profileTile";
import { navigate } from "app/utils/navHelper";
import React from "react";
import { FunctionComponent } from "react";
import { useHistory } from "react-router";
import { BlogItem } from "../blog/blogF";

require('./blogEntry.css');

const Arrow = require('../../../jsweetman/assets/images/arrow.svg');

interface Props {
  blogItem: BlogItem;
}

export const BlogEntry: FunctionComponent<Props> = ({blogItem: {title, summary, path, date}}: Props) => {
  const history = useHistory();
  return <li className="blogEntry">
    <ProfileTile date={date}/>
    <div className="blogEntry__title">{title}</div>
    <div className="blogEntry__summary">{summary}</div>
    <a className="blogEntry__showMore" onClick={(e) => navigate(e, path, history)}>
      <span>Read More</span>
      <Arrow />
    </a>
  </li>;
};
