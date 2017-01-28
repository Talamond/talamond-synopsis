export function createActionTypes(prefix = '') {
	return {
    SELECT_TAB: `${prefix}SELECT_TAB`,
    CHANGE_DIMENSIONS: `${prefix}CHANGE_DIMENSIONS`,
    FETCH_DATA: `${prefix}FETCH_DATA`
	};
}
