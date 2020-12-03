import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { EditContainer } from 'domain/auth/containers';

import { Edit } from 'view/components/auth';

export const EditPage: React.FC<RouteComponentProps> = () => {
  return <EditContainer component={Edit} />;
};
