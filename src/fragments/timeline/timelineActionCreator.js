import { getResumeData } from '../../utils/apiSimulator.js';

export function createActionCreators(actionTypes) {

  function clickElem(timelineElem) {
    return (dispatch) => {
      dispatch({
        type: actionTypes.CLICK_ELEM,
        payload: {
          timelineElem
        }
      });
    };
  }

	function goToDate(date) {
		return (dispatch) => {
			dispatch({
				type: actionTypes.GO_TO_DATE,
				payload: {
					date
				}
			});
		};
	}

	// In real scenario, this would be a special acion redux-api-middleware
	function fetchData(selectState) { // TODO this is weird...
    return {
      type: actionTypes.FETCH_DATA,
      payload: {
        data: getResumeData(),
        selectState
      }
    };
  }

	return {
    goToDate,
    clickElem,
    fetchData
	};
}
