import React, { useState } from 'react';
import { Parallax } from 'react-scroll-parallax';

import { Team, Teachers, Media } from './components';
import { Tab, TabContent, ParallaxCache } from 'view/common';

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
              <TeamSvg className="tabicon" />
              {activeTab === 'team' && <S.Text>команда</S.Text>}
            </S.TabHeader>

            <S.TabHeader value="teachers" active={activeTab === 'teachers'}>
              <TeachersSvg className="tabicon" />
              {activeTab === 'teachers' && <S.Text>преподаватели</S.Text>}
            </S.TabHeader>

            <S.TabHeader value="media" active={activeTab === 'media'}>
              <MediaSvg className="tabicon" />
              {activeTab === 'media' && <S.Text>пресс-центр</S.Text>}
            </S.TabHeader>
          </S.TabHeadersWrapper>
        </S.AbsolutePosition>

        <TabContent value="team">
          <Parallax y={[0, 20]}>
            <ParallaxCache />
            <Team />
          </Parallax>
        </TabContent>

        <TabContent value="teachers">
          <Parallax y={[0, 15]}>
            <ParallaxCache />
            <Teachers />
          </Parallax>
        </TabContent>

        <TabContent value="media">
          <Parallax y={[0, 20]}>
            <ParallaxCache />
            <Media />
          </Parallax>
        </TabContent>
      </Tab>
    </S.Wrapper>
  );
};
