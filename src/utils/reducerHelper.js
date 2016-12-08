import _ from 'lodash';

/* eslint-disable */
// TODO move into common lib
export const createState = (initState, fragments) => {
	const newState = _.cloneDeep(initState);
	if (newState.fragments) throw 'You cannot have anything in the state named fragments.';
	newState.fragments = {};
	_.forIn(fragments, (v, k) => {
		if (!v.initialState) throw ('Fragment ' + k + ' must have initialState');
		newState.fragments[k] = v.initialState;
	});
	return newState
};

export const runHandlers = (state, action, handlers, fragments) => {
	return runHandlerTree(state, state, action, addFragmentsHandlers(handlers, fragments));
};

export const runHandlerTree = (state, stateToReturn, action, handlers) => {
	const { type, payload } = action;

	if (handlers[type]) {
		return handlers[type](_.cloneDeep(state), payload);
	}

	for (let fragment in handlers.fragments) {
		if (!handlers.fragments[fragment]) throw 'Fragment must have handlers';
		const subState = _.cloneDeep(state.fragments[fragment]);
		const newSubState = runHandlerTree(subState, null, action, handlers.fragments[fragment]);
		if (newSubState) {
			const newState = _.cloneDeep(state);
			newState.fragments[fragment] = newSubState;
			stateToReturn = newState;
		}
	}
	return stateToReturn;
};

export const addFragmentsHandlers = (handlers, fragments) => {
	handlers.fragments = {};
	for (let fragment in fragments) {
		if (!fragments[fragment].handlers) throw 'Fragment must have handlers';
		handlers.fragments[fragment] = fragments[fragment].handlers;
	}
	return handlers;
}
