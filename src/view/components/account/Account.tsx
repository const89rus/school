import React from 'react';
import { Link } from 'react-router-dom';

import { ProfileContainer } from 'domain/account/containers';

import { Profile } from './Profile/Profile';

import { Tabs } from './Tabs/Tabs';

import * as S from './styled';

export const Account: React.FC = () => {
  return (
    <S.Wrapper>
      <S.MobileMenuWrapper>
        <S.MobileMenu>
          <Link to="/">my profile</Link>
          <Link to="/">homework</Link>
          <Link to="/">lesson</Link>
        </S.MobileMenu>
      </S.MobileMenuWrapper>

      <ProfileContainer component={Profile} />
      <S.TabsWrapper>
        <Tabs />
      </S.TabsWrapper>
    </S.Wrapper>
  );
};
