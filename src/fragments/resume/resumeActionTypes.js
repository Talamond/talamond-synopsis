export function createActionTypes(prefix = '') {
  return {
    FETCH_DATA: `${prefix}FETCH_DATA`,
    EXPAND_SECTION: `${prefix}EXPAND_SECTION`
  };
}
