export function createActionCreators(actionTypes) {

  function initialize(data) {
    return {
      type: actionTypes.INITIALIZE_CLOUD,
      payload: {
        data
      }
    };
  }

  return {
    initialize
  };
}
