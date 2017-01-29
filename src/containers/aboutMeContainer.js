import React, {PropTypes} from 'react';
import { connect } from 'react-redux';

@connect(state => ({
  blog: state.blog
}))
export class AboutMeContainer extends React.Component {
  static propTypes = {
    // router
    location: PropTypes.object,
    params: PropTypes.object,
    route: PropTypes.object,
    routeParams: PropTypes.object,
    routes: PropTypes.array,

    blog: PropTypes.object
  };

  componentWillMount() {
  }

  render() {
    return (
      <div>
      </div>
    );
  }
}
