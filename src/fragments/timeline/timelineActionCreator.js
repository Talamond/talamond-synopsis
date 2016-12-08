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

	return {
    goToDate,
    clickElem
	};
}
