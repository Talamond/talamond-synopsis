import { momentToMonthString } from '../../../utils/dateHelper';
import cn from 'classnames';
import React from 'react';
import { TimelineElementI } from '../timelineF.js';
import { TimelineElementContent } from './timelineElementContentC';
import { useSelector } from 'react-redux';
import { RootState } from 'app/modules';
require('./timelineElement.css');

export interface Props {
  timelineElem: TimelineElementI;
  timelineType: 'odd' | 'even' | 'education';
}

export const TimelineElement = (props: Props) => {
  const {timelineType, timelineElem} = props;
  const selectedTab = useSelector((s: RootState) => s.timeline.selectedTabs[timelineElem.id])

  return <div className={cn('timelineElement', timelineType)}>
    <h1 className="timelineElement__jobTitle">{timelineElem.title}</h1>
    <h2 className="timelineElement__employer">{timelineElem.employer}</h2>
    <h3 className="timelineElement__startEndDates">{momentToMonthString(timelineElem.startDate)} - {momentToMonthString(timelineElem.endDate)}</h3>
    <div className={cn("timelineElement__contentWrapper", timelineElem.type, timelineType)}>
      <TimelineElementContent selectedTab={selectedTab} timelineType={timelineType} timelineElem={timelineElem}/>
    </div>
  </div>;
};
