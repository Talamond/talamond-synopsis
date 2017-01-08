import { getResumeData } from '../../utils/apiSimulator.js';

export function createActionCreators(actionTypes) {

	// In real scenario, this would be a special action redux-api-middleware
	function fetchData(selectState) { // TODO this is weird...
    return {
      type: actionTypes.FETCH_DATA,
      payload: {
        data: getResumeData(),
        selectState
      }
    };
  }

  function selectTab(id, tabIndex) {
	  return {
	    type: actionTypes.SELECT_TAB,
      payload: {
	      id,
        tabIndex
      }
    };
  }

	return {
    fetchData,
    selectTab
	};
}
