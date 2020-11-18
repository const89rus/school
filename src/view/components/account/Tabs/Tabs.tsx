import React, { useState } from 'react';

import { PlayListContainer } from 'domain/account/containers';

import { Tab, TabContent, Upload } from 'view/common';

import { Homework, Lesson } from './components';

import * as S from './styled';

export const Tabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState('homework');

  return (
    <S.Wrapper>
      <Tab initialValue="homework" onChangeActiveTab={setActiveTab}>
        <S.AbsolutePosition>
          <S.TabHeadersWrapper>
            <S.TabHeader value="homework" active={activeTab === 'homework'}>
              <S.Text value="homework" active={activeTab === 'homework'}>
                домашнее задание
              </S.Text>
            </S.TabHeader>

            <S.TabHeader value="lesson" active={activeTab === 'lesson'}>
              <S.Text value="lesson" active={activeTab === 'lesson'}>
                записи уроков
              </S.Text>
            </S.TabHeader>
          </S.TabHeadersWrapper>
        </S.AbsolutePosition>

        <S.ContentWrapper>
          <TabContent value="homework">
            <S.Input>
              <Upload label="загрузить" />
            </S.Input>
            <Homework />
          </TabContent>

          <TabContent value="lesson">
            <PlayListContainer component={Lesson} />
          </TabContent>
        </S.ContentWrapper>
      </Tab>
    </S.Wrapper>
  );
};
