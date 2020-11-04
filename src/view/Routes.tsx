import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { MainPage, AccountPage } from './pages';

export const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" render={MainPage} exact />
      <Route path="/account" render={AccountPage} exact />
    </Switch>
  );
};
