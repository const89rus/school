import React, { useContext } from 'react';
import { Switch, Route } from 'react-router-dom';

import { AuthContext } from 'data/auth/AuthContext';

import { Layout } from 'view/components/layout/Layout';

import { MainPage, AccountPage, RegisterPage, ResetPasswordPage, LoginPage } from './pages';

export const Routes: React.FC = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <Switch>
      {currentUser ? (
        <Layout isAuthed>
          <Route path="/" render={AccountPage} exact />
        </Layout>
      ) : (
        <Layout>
          <Route path="/" render={MainPage} exact />
          <Route path="/register" render={RegisterPage} exact />
          <Route path="/login" render={LoginPage} exact />
          <Route path="/reset-password" render={ResetPasswordPage} exact />
        </Layout>
      )}
    </Switch>
  );
};
