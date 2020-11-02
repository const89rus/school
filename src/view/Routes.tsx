import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { MainPage, AccountPage } from './pages';

export const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" render={MainPage} exact />
        <Route path="/account" render={AccountPage} exact />
      </Switch>
    </Router>
  );
};
