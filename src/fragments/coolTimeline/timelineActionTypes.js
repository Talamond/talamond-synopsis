export function createActionTypes(prefix = '') {
	return {
    SELECT_TAB: `${prefix}SELECT_TAB`,

    FETCH_DATA: `${prefix}FETCH_DATA`
	};
}
