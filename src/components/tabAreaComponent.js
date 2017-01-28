import React, {PropTypes} from 'react';
import './tab.scss';
import _ from 'lodash';
import cn from 'classnames';
import OnVisible from 'react-on-visible';

export class TabArea extends React.Component {

  static propTypes = {
    tabContents: PropTypes.array,
    selectedTab: PropTypes.number,
    className: PropTypes.string,
    onTabSelect: PropTypes.func,
    style: PropTypes.oneOf(['normal', 'bubble'])
  };

  static defaultProps = {
    selectedTab: 0,
    style: 'bubble'
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
    const {tabContents, selectedTab, className, style} = this.props;
    return (
      <div className={cn('tabArea-root', style, className)}>
        <div className="tab-content">
          {tabContents[selectedTab].content}
        </div>
        <OnVisible visibleClassName="animate-tabs">
          <div className="tabs">
            {this.renderTabs(tabContents)}
          </div>
        </OnVisible>
      </div>
    );
  }
}
