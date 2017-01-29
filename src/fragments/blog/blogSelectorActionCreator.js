export function createActionCreators(actionTypes) {

  // In real scenario, this would be a special action redux-api-middleware
  function selectBlog() { // TODO this is weird...
    return {
      type: actionTypes.SELECT_BLOG,
      payload: {}
    };
  }

  return {
    selectBlog
  };
}
