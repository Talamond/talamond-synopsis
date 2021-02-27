import React from 'react';
import { Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import { AppC } from './modules/app/appC';

export const App = hot(module)(() => (
  <Route path="/" component={AppC} />
));
