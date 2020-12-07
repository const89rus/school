import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { ProfileContainer } from 'domain/account/containers';

import { Edit } from 'view/components/auth';

export const EditPage: React.FC<RouteComponentProps> = () => {
  return <ProfileContainer component={Edit} />;
};
