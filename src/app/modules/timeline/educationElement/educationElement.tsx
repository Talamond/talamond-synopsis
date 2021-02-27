import React, { FunctionComponent } from 'react';
import { checkDeviceSize } from 'app/utils/responsiveHelper';
import { TimelineElementI } from '../timelineF';
import ProgressiveImage from 'react-progressive-image';
import { Responsive } from 'app/components/responsive/responsive';
import { EducationElementContent } from './educationElementContent';
import { useWindowSize } from 'app/utils/hooks/useWindowSize';
require('./educationElement.css');

export interface Props {
  timelineElem: TimelineElementI;
}

export const EducationElement: FunctionComponent<Props> = (props: Props) => {
  const {width} = useWindowSize();
  let schoolImage = '/jsweetman/assets/images/UW_Building-mobile.jpg';
  let schoolImageSmall = '/jsweetman/assets/images/UWsmallMobile.jpg';
  if (checkDeviceSize() === 'mobile') {
    schoolImage = '/jsweetman/assets/images/UW_Building-full.jpg';
    schoolImageSmall = '/jsweetman/assets/images/UWSmall.jpg';
  }

  const small = <EducationElementContent timelineElem={props.timelineElem} />;
  const large = <EducationElementContent timelineElem={props.timelineElem} isBig />;

  return (
    <div key="education" className="educationElement">
      <ProgressiveImage src={schoolImage} placeholder={schoolImageSmall}>
        {(src: string) => <img src={src} alt='an image of UW campus'/>}
      </ProgressiveImage>
      <Responsive className="educationElement__title" mobile={small} pad={small} desktop={large}/>
    </div>
  );
};
