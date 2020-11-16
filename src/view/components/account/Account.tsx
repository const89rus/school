import React from 'react';

import { ProfileContainer } from 'domain/account/containers';

import { Profile } from './Profile/Profile';

import { Tabs } from './Tabs/Tabs';

import * as S from './styled';

export const Account: React.FC = () => {
  return (
    <S.Wrapper>
      <ProfileContainer component={Profile} />

      <Tabs />
    </S.Wrapper>
  );
};
