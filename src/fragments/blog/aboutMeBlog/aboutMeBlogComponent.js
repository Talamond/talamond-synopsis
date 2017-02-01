import React, {PropTypes} from 'react';
import { BlogBase } from '../blog/blogBaseComponent.js';
import {browserHistory} from 'react-router'; // this needs to be imported because BlogBase uses it
import arrow from '../../../assets/images/arrow.svg';

export class AboutMeBlog extends BlogBase {
  renderContent() {
    return (<div className="blog-base content">
      Beside coding I take part in other hobbies. I've been known to do all sorts of things mainly including playing board games, video games, long distance running, rock climbing and badminton. In 2013 I created my own meetup group to facilitate my desire for trying random new things. Its called the Random Activity Group aimed at providing young adults an opportunity to hang out with other young adults doing pretty much anything. Over the Years we've accumulated over 6000 members with over 1000 events with activities such as: board game nights, paintball, various sports, hiking, camping, clubbing, eating out, movies, random parties, man parties, shooting range, festivals, the list is endless. although I am no longer an active organiser in Random Activity Group, it still lives on through others I've also promoted to organisers as well to keep it alive! We still have meetups multiple times every week.
    </div>);
  }
}
