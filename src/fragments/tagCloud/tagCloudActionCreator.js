export function createActionCreators(actionTypes) {

  function initialize(data) {
    return (dispatch) => {
      dispatch({
        type: actionTypes.INITIALIZE_CLOUD,
        payload: {
          data
        }
      });
    };
  }

  return {
    initialize
  };
}
