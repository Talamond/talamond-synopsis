import React, {PropTypes} from 'react';
import './tab.scss';
import _ from 'lodash';
import cn from 'classnames';

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
    const {selectedTab} = this.props;
    const tabs = [];
    _.forEach(tabContents, (tabContent, index) => {
      const selected = index === selectedTab;
      tabs.push(<div key={index} className={cn('tab', {selected})} onClick={() => this.props.onTabSelect(index)}>
        {tabContent.name}
        {selected && <div className="tab-select-line"/>}
      </div>);
    });
    return tabs;
  }

  render() {
    const {tabContents, selectedTab} = this.props;
    return (
      <div className="tabArea-root">
        <div className="tab-content">
          {tabContents[selectedTab].content}
        </div>
        <div className="tabs">
          {this.renderTabs(tabContents)}
        </div>
      </div>
    );
  }
}
