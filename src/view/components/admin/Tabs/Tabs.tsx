import React, { useState } from 'react';

import {
  AnnoucementsContainer,
  MediaContainer,
  PressContainer,
  ReviewsContainer,
  TeachersContainer,
  TeamContainer,
} from 'domain/admin/containers';

import { Review, Announcement, Media, Teachers, Team, Press } from './components';
import { Tab, TabContent } from 'view/common';

import * as S from './styled';

export const Tabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState('review');

  return (
    <S.Wrapper>
      <Tab initialValue="review" onChangeActiveTab={setActiveTab}>
        <S.TabHeadersWrapper>
          <S.TabHeader value="review" active={activeTab === 'review'}>
            <S.Text>проверка</S.Text>
          </S.TabHeader>

          <S.TabHeader value="massmedia" active={activeTab === 'massmedia'}>
            <S.Text>СМИ</S.Text>
          </S.TabHeader>

          <S.TabHeader value="announsment" active={activeTab === 'announsment'}>
            <S.Text>анонсы</S.Text>
          </S.TabHeader>

          <S.TabHeader value="team" active={activeTab === 'team'}>
            <S.Text>Команда</S.Text>
          </S.TabHeader>

          <S.TabHeader value="teachers" active={activeTab === 'teachers'}>
            <S.Text>Преподаватели</S.Text>
          </S.TabHeader>

          <S.TabHeader value="press" active={activeTab === 'press'}>
            <S.Text>Пресс-центр</S.Text>
          </S.TabHeader>
        </S.TabHeadersWrapper>

        <TabContent value="review">
          <ReviewsContainer component={Review} />
        </TabContent>

        <TabContent value="massmedia">
          <MediaContainer component={Media} />
        </TabContent>

        <TabContent value="announsment">
          <AnnoucementsContainer component={Announcement} />
        </TabContent>

        <TabContent value="team">
          <TeamContainer component={Team} />
        </TabContent>

        <TabContent value="teachers">
          <TeachersContainer component={Teachers} />
        </TabContent>

        <TabContent value="press">
          <PressContainer component={Press} />
        </TabContent>
      </Tab>
    </S.Wrapper>
  );
};
