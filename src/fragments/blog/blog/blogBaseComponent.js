import React, {PropTypes} from 'react';
import { browserHistory } from 'react-router';
import { ProfileTile } from '../../../components/profileTile.js';
import './blogBase.scss';
import arrow from '../../../assets/images/arrow.svg';

export class BlogBase extends React.Component {

  static propTypes = {
    baseBlog: PropTypes.object, // redux state
    title: PropTypes.string, // attribute
    date: PropTypes.object, // attribute
    // TODO next title as well
    nextBlog: PropTypes.object, // attribute
    prevBlog: PropTypes.object // attribute
  };

  renderContent() {
    return <div className="blog-base content">Overwrite me</div>;
  }

  renderTitle(title, date) {
    return (<div className="blog-base title-area">
      <ProfileTile date={date}/>
      <div className="blog-base title">{title}</div>
    </div>);
  }

  renderNext(nextBlog) {
      return (<div className="blog-base next-area" onClick={() => browserHistory(nextBlog.path)}>
          <span>{nextBlog.title}</span>
          <svg>
            <use xlinkHref={arrow}/>
          </svg>
        </div>);
  }

  renderBack(prevBlog) {
      return (<div className="blog-base back-area" onClick={() => browserHistory(prevBlog.path)}>
          <svg>
            <use xlinkHref={arrow}/>
          </svg>
          <span>{prevBlog.title}</span>
        </div>);
  }

  render() {
    const {title, date, nextBlog, prevBlog} = this.props;
    return (
      <div className="blog-base-root">
        {this.renderTitle(title, date)}
        {this.renderContent()}
        <div className="blog-base navigation">
          {this.renderBack(prevBlog)}
          {this.renderNext(nextBlog)}
        </div>
      </div>
    );
  }
}
