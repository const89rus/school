import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { ResetContainer } from 'domain/account/containers';

import { Reset } from 'view/components/auth';

export const ResetPasswordPage: React.FC<RouteComponentProps> = () => {
  return <ResetContainer component={Reset} />;
};
