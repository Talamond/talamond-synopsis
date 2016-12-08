export function createActionTypes(prefix = '') {
	return {
		GO_TO_DATE: `${prefix}GO_TO_DATE`,
    CLICK_ELEM: `${prefix}CLICK_ELEM`
	};
}
