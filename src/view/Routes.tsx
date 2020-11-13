import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { MainPage, AccountPage, RegisterPage, ResetPasswordPage, LoginPage } from './pages';

export const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" render={MainPage} exact />
      <Route path="/account" render={AccountPage} exact />
      <Route path="/register" render={RegisterPage} exact />
      <Route path="/login" render={LoginPage} exact />
      <Route path="/reset-password" render={ResetPasswordPage} exact />
    </Switch>
  );
};
