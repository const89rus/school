import React, { useState } from 'react';

import { Review, Announcement, Media } from './components';
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
        </S.TabHeadersWrapper>

        <TabContent value="review">
          <Review />
        </TabContent>

        <TabContent value="massmedia">
          <Media />
        </TabContent>

        <TabContent value="announsment">
          <Announcement />
        </TabContent>
      </Tab>
    </S.Wrapper>
  );
};
