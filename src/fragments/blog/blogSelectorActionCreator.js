export function createActionCreators(actionTypes) {

  // Turns out I didn't use this action
  function selectBlog() {
    return {
      type: actionTypes.SELECT_BLOG,
      payload: {}
    };
  }

  return {
    selectBlog
  };
}
