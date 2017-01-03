export function createActionCreators(actionTypes) {

  function initialize(data, width, height) {
    return {
      type: actionTypes.INITIALIZE_CLOUD,
      payload: {
        words: data,
        width,
        height
      }
    };
  }

  return {
    initialize
  };
}
