import { getResumeData } from '../../utils/apiSimulator.js';

export function createActionCreators(actionTypes) {

	// In real scenario, this would be a special action redux-api-middleware
	function fetchData() { // TODO this is weird...
    return {
      type: actionTypes.FETCH_DATA,
      payload: {
        data: getResumeData()
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

  function changeDimensions(width, height) {
    return {
      type: actionTypes.CHANGE_DIMENSIONS,
      payload: {
        width,
        height
      }
    };
  }

	return {
    fetchData,
    selectTab,
    changeDimensions
	};
}
