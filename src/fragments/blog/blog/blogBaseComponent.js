import React, {PropTypes} from 'react';
import { browserHistory } from 'react-router';
import { ProfileTile } from '../../../components/profileTile.js';
import './blogBase.scss';

export class BlogBase extends React.Component {

  static propTypes = {
    baseBlog: PropTypes.object, // redux state
    title: PropTypes.string, // attribute
    date: PropTypes.object, // attribute
    // TODO next title as well
    nextTitle: PropTypes.string, // attribute
    nextUrl: PropTypes.string, // attribute
    prevTitle: PropTypes.string, // attribute
    prevUrl: PropTypes.string // attribute
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

  renderNext(nextTitle, nextUrl) {
      return (<div className="blog-base next-area">{nextTitle}</div>);
  }

  renderBack(prevTitle, prevUrl) {
      return (<div className="blog-base back-area">{prevTitle}</div>);
  }

  render() {
    const {title, date, nextUrl, prevUrl, nextTitle, prevTitle} = this.props;
    return (
      <div className="blog-base-root">
        {this.renderTitle(title, date)}
        {this.renderContent()}
        {this.renderBack(prevTitle, prevUrl)}
        {this.renderNext(nextTitle, nextUrl)}
      </div>
    );
  }
}
