
import * as moment from 'moment/moment.js';
import { ROOT_PATH } from '../app/appF';

export const TIMELINE_PATH = `${ROOT_PATH}`;
export interface Skill {
  label: string;
  weight: number;
}

export interface TimelineElementI {
  id: number;
  startDate: moment.Moment;
  endDate: moment.Moment;
  summary?: string;
  title: string;
  subTitle?: string;
  employer: string;
  type: string;
  color: string;
  image: any; // todo: maybe image path
  imageWidth?: number;
  skills?: Skill[];
  details?: string[];
  description?: string;
  descriptions?: {
    [project: string]: string;
  }
}
