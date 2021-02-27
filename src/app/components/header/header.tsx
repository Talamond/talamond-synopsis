import { BLOG_PATH } from 'app/modules/blog/blogF';
import { TIMELINE_PATH } from 'app/modules/timeline/timelineF';
import { navigate } from 'app/utils/navHelper';
import React, { FunctionComponent } from 'react';
import { useHistory } from 'react-router-dom';


require('./header.css');
const Github = require('../../../jsweetman/assets/images/github.svg');

interface Props {}

export const Header: FunctionComponent<Props> = (props: Props) => {
  const history = useHistory();
  return (
    <header className="header">
      <a className="header__elem" onClick={(e: React.MouseEvent<HTMLElement>) => navigate(e, TIMELINE_PATH, history)}>Timeline</a>
      <a className="header__elem" onClick={(e: React.MouseEvent<HTMLElement>) => navigate(e, BLOG_PATH, history)}>Blog</a>
      <a className="header__githubLink" href="https://github.com/Talamond">
        <Github />
      </a>
    </header>
  );
};
