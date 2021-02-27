import { Store, createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { logger, thunk } from 'app/middleware';
import { reducers, RootState } from './modules';
import { typedToPlain } from 'jsweetman-redux-typed';

function buildRootReducer(allReducers: any) {
	return combineReducers({ ...allReducers });
}

export function configureStore(initialState?: RootState): Store<RootState> {
  let middleware = applyMiddleware(thunk, typedToPlain, logger);

  if (process.env.NODE_ENV !== 'production') {
    middleware = composeWithDevTools(middleware);
  }

  const store = createStore(buildRootReducer(reducers) as any, initialState as any, middleware) as Store<RootState>;

  if (module.hot) {
    module.hot.accept('./modules', () => {
      const nextReducer = require('./modules');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
