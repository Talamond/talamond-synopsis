import React from 'react';
import { TimelineElementI } from '../timelineF.js';
import OnVisible from 'react-on-visible';
import { checkDeviceSize } from 'app/utils/responsiveHelper';
import _ from 'lodash';
import { TabArea } from 'app/components/tabArea/tabArea';
import { useDispatch } from 'react-redux';
import { SelectTab } from '../timelineA';
import { TagCloud } from 'app/components/tagCloud/tagCloud';
import { useWindowSize } from 'app/utils/hooks/useWindowSize';

require('./timelineElementContent.css');

const isIE = navigator.userAgent.indexOf('MSIE') !== -1 || navigator.appVersion.indexOf('Trident/') > 0;

const NO_IMAGE_WIDTH = 1100;

export interface Props {
  timelineElem: TimelineElementI;
  selectedTab: number;
  timelineType: 'odd' | 'even' | 'education';
}

export const TimelineElementContent = (props: Props) => {
  const dispatch = useDispatch();
  const {width} = useWindowSize();
  const {timelineElem: {skills, description, descriptions, details, id, image, imageWidth}, selectedTab} = props;
  let fontSize = 22;
  let maxLength = 750;
  let divisor = 50;
  if (checkDeviceSize() === 'mobile') {
    fontSize = 14;
    maxLength = 500;
    divisor = 100;
  }
  if (description && description.length > maxLength) {
    fontSize = Math.ceil(fontSize - ((description.length - maxLength ) / divisor));
  }
  const tabContents = [
    {
      name: 'Summary',
      content: <ul className="timelineElementContent__details">
        {details && details.map((detail, index) => {
          return (
            <OnVisible key={index} visibleClassName="animate-detail">
              <li key={index} className="timelineElementContent__detail">{detail}</li>
            </OnVisible>
          );
        })}
      </ul>
    },
    {
      name: 'Skills',
      content: <TagCloud id={`${id}`} data={skills ?? []}/>
    },
    {
      name: 'Details',
      content: <div className="timelineElementContent__description" style={{fontSize: fontSize + 'px'}}>{description}</div>
    }
  ];
  if (descriptions) {
    _.forIn(descriptions, (desc, project) => {
      tabContents.push({name: project, content: <div className="timelineElementContent__description" style={{fontSize: fontSize + 'px'}}>{desc}</div>});
    });
  }
  return <>
    {width! >= NO_IMAGE_WIDTH && <img src={image} style={imageWidth ? {width: imageWidth} : undefined} className={`timelineElementContent__image id${id} ${isIE ? 'ie' : 'notIe'}`} />}
    <TabArea tabContents={tabContents} selectedTab={selectedTab} onTabSelect={(tabIndex) => dispatch(new SelectTab(id, tabIndex) as any)}/>
  </>;
};
