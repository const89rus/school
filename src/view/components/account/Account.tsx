import React from 'react';

import { ProfileContainer, PlayListContainer } from 'domain/account/containers';

import { Profile } from './Profile/Profile';
import { Playlist } from './Playlist/Playlist';

export const Account: React.FC = () => {
  return (
    <div>
      <ProfileContainer component={Profile} />
      <PlayListContainer component={Playlist} />
    </div>
  );
};
