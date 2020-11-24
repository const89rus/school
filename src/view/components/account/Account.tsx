import React from 'react';
import { Link } from 'react-router-dom';

import { ProfileContainer } from 'domain/account/containers';
import { PlayListContainer } from 'domain/account/containers';

import { Profile } from './Profile/Profile';

import { Tabs } from './Tabs/Tabs';
import { Homework, Lesson } from './Tabs/components';

import * as S from './styled';

export const Account: React.FC = () => {
  return (
    <S.Wrapper>
      <S.MobileMenuWrapper>
        <S.MobileMenu>
          <Link to="/">мой профиль</Link>
          <Link to="/#homework">домашнее задание</Link>
          <Link to="/#lesson">записи уроков</Link>
        </S.MobileMenu>
      </S.MobileMenuWrapper>

      <ProfileContainer component={Profile} />

      <S.MobileHomework id="homework">
        <S.MobileTabsHeader>Домашние задания</S.MobileTabsHeader>
        <Homework />
      </S.MobileHomework>
      <S.MobileLesson id="lesson">
        <S.MobileTabsHeader>Записи уроков</S.MobileTabsHeader>
        <PlayListContainer component={Lesson} />
      </S.MobileLesson>
      <S.TabsWrapper>
        <Tabs />
      </S.TabsWrapper>
    </S.Wrapper>
  );
};
