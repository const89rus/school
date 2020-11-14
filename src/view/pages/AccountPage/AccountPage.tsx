import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { ProfileContainer } from 'domain/account/containers/ProfileContainer';

import { Profile } from 'view/components/account/Profile/Profile';

export const AccountPage: React.FC<RouteComponentProps> = () => {
  return (
    <div>
      <ProfileContainer component={Profile} />
    </div>
  );
};
