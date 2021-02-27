import { isActionType, Reducer } from "jsweetman-redux-typed";
import { FetchData, SelectTab } from "./timelineA";
import { Skill, TimelineElementI } from "./timelineF";
import _ from 'lodash';

export interface TimelineState {
  timelineElements?: TimelineElementI[],
  selectedTabs: {
    [id: string]: number;
  },
  skillMap: {
    [skillLabel: string]: number;
  },
  allSkills: Skill[];
}

const getInitialState = (): TimelineState => {
  return {
    selectedTabs: {},
    skillMap: {},
    allSkills: []
  };
};

export const timelineReducer: Reducer<TimelineState> = (state, action) => {

	if (isActionType(action, SelectTab)) {
    const newState = {...state};
    newState.selectedTabs = {...state.selectedTabs};
    newState.selectedTabs[action.id] = action.tabIndex;
		return newState;
  }

  if (isActionType(action, FetchData)) {
    const newState = {...state};
    newState.timelineElements = [...action.data];
    newState.skillMap = {...state.skillMap};
    newState.timelineElements = _.sortBy(newState.timelineElements, (elem: TimelineElementI) => {
      return -1 * elem.endDate.unix();
    });
    newState.timelineElements!.forEach((elem: TimelineElementI) => {
      if (elem.skills) {
        elem.skills.forEach((skill: Skill) => {
          if (newState.skillMap[skill.label]) {
            newState.skillMap[skill.label] += skill.weight;
          } else {
            newState.skillMap[skill.label] = skill.weight;
          }
        });
      }
    });
    const allSkills: Skill[] = [];
    _.forIn(newState.skillMap, (value: number, key: string) => {
      allSkills.push({label: key, weight: value});
    });
    newState.allSkills = allSkills;
    return newState;
  }

	return state || { ...getInitialState() };
};
