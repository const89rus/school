import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { EditProfileContainer } from 'domain/account/containers';

import { Edit } from 'view/components/auth';

export const EditPage: React.FC<RouteComponentProps> = () => {
  return <EditProfileContainer component={Edit} />;
};
