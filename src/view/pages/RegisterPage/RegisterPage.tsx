import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { LoginContainer } from 'domain/auth/containers';

import { Register } from 'view/components/auth';

export const RegisterPage: React.FC<RouteComponentProps> = () => {
  return <LoginContainer component={Register} />;
};
