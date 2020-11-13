import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { LoginContainer } from 'domain/auth/containers';

import { Login } from 'view/components/auth';

export const LoginPage: React.FC<RouteComponentProps> = () => {
  return <LoginContainer component={Login} />;
};
