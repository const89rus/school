import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { RegisterContainer } from 'domain/auth/containers';

import { Register } from 'view/components/auth';

export const RegisterPage: React.FC<RouteComponentProps> = () => {
  return <RegisterContainer component={Register} />;
};
