import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { Admin } from 'view/components/admin/Admin';

export const AdminPage: React.FC<RouteComponentProps> = () => {
  return <Admin />;
};
