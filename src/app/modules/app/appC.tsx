import { Footer } from 'app/components/footer/footer';
import { Header } from 'app/components/header/header';
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { Blog } from '../blog/blog';
import { BLOG_PATH } from '../blog/blogF';
import { BlogSelect } from '../blogSelect/blogSelect';
import { Timeline } from '../timeline/timeline';
import { TIMELINE_PATH } from '../timeline/timelineF';

require('./app.css');

export const AppC = () => {
  return (<div className="app">
      <Header />
      <div className="app__main">
        <Route exact path="/">
            <Redirect to={TIMELINE_PATH} />
        </Route>
        <Route path={TIMELINE_PATH} exact component={Timeline}/>
        <Route path={BLOG_PATH} exact component={BlogSelect}/>
        <Route path={BLOG_PATH} component={Blog}/>
      </div>
      <Footer/>
    </div>
  );
};
