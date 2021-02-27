import React from 'react';
import _ from 'lodash';
import cn from 'classnames';
import OnVisible from 'react-on-visible';
require('./tabArea.css');

export interface Props {
  tabContents: ({name: string; content: React.ReactNode;})[];
  selectedTab?: number;
  onTabSelect: (index: number) => void;
}

export const TabArea = (props: Props) => {
  const {tabContents} = props;
  const selectedTab = props.selectedTab ? props.selectedTab : 0;
  return (
    <div className="tabArea">
      <div className="tabArea__content">
        {tabContents[selectedTab].content}
      </div>
      <OnVisible visibleClassName="animate-tabs">
        <div className="tabArea__tabs">
          {tabContents.map((tabContent, index) => {
            const selected = index === selectedTab;
            return <button key={index} className={cn("tabArea__tab", {selected})} onClick={() => props.onTabSelect(index)}>
              {tabContent.name}
              {selected && <div className="tabArea__selectedLine"/>}
            </button>;
          })}
        </div>
      </OnVisible>
    </div>
  );
};
