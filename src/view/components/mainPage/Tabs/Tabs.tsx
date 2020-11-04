import React, { useState } from 'react';

import { Team, Teachers, Media } from './components';
import { Tab, TabContent } from 'view/common';

import { ReactComponent as TeamSvg } from 'assets/svg/Shape.svg';
import { ReactComponent as TeachersSvg } from 'assets/svg/Vector.svg';
import { ReactComponent as MediaSvg } from 'assets/svg/teachers.svg';

import * as S from './styled';

export const Tabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState('team');

  return (
    <S.Wrapper>
      <Tab initialValue="team" onChangeActiveTab={setActiveTab}>
        <S.AbsolutePosition>
          <S.TabHeadersWrapper>
            <S.TabHeader value="team" active={activeTab === 'team'}>
              <TeamSvg />
              {activeTab === 'team' && <S.Text>команда</S.Text>}
            </S.TabHeader>

            <S.TabHeader value="teachers" active={activeTab === 'teachers'}>
              <TeachersSvg />
              {activeTab === 'teachers' && <S.Text>преподаватели</S.Text>}
            </S.TabHeader>

            <S.TabHeader value="media" active={activeTab === 'media'}>
              <MediaSvg />
              {activeTab === 'media' && <S.Text>пресс-центр</S.Text>}
            </S.TabHeader>
          </S.TabHeadersWrapper>
        </S.AbsolutePosition>

        <TabContent value="team">
          <Team />
        </TabContent>

        <TabContent value="teachers">
          <Teachers />
        </TabContent>

        <TabContent value="media">
          <Media />
        </TabContent>
      </Tab>
    </S.Wrapper>
  );
};
