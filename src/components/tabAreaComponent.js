import React, {PropTypes} from 'react';
import './tab.scss';
import _ from 'lodash';

export class TabArea extends React.Component {

  static propTypes = {
    tabContents: PropTypes.array,
    selectedTab: PropTypes.number,
    onTabSelect: PropTypes.func
  };

  static defaultProps = {
    selectedTab: 0
  };

  renderTabs(tabContents) {
    const tabs = [];
    _.forEach(tabContents, (tabContent, index) => {
      tabs.push(<div className="tab" onClick={() => this.props.onTabSelect(index)}>
        {tabContent.name}
      </div>);
    });
    return tabs;
  }

  render() {
    const {tabContents, selectedTab} = this.props;
    return (
      <div className="tabArea-root">
        <div>
          {tabContents[selectedTab].content}
        </div>
        {this.renderTabs(tabContents)}
      </div>
    );
  }
}
