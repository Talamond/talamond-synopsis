import { typeName, Action } from 'jsweetman-redux-typed';

const SUFFIX = '__TIMELINE';

@typeName(`FETCH_DATA${SUFFIX}`)
export class FetchData extends Action {
	constructor(public data: any[]) {
		super();
	}
}

@typeName(`SELECT_TAB${SUFFIX}`)
export class SelectTab extends Action {
	constructor(public id: number, public tabIndex: number) {
		super();
	}
}

@typeName(`CHANGE_DIMENSIONS${SUFFIX}`)
export class ChangeDimensions extends Action {
	constructor(public width: number, public height: number) {
		super();
	}
}
