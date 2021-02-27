import { timelineReducer, TimelineState } from "./timeline/timelineR";

export interface RootState {
  timeline: TimelineState;
}

export const reducers = {
  timeline: timelineReducer
};
