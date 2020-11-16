import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { Account } from 'view/components/account/Account';

export const AccountPage: React.FC<RouteComponentProps> = () => {
  return <Account />;
};
