import React, { useState } from 'react';

import { AnnoucementsContainer } from 'domain/admin/containers';

import { Announcement } from './components';
import { Tab, TabContent } from 'view/common';

import * as S from './styled';

export const Tabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState('announsment');

  return (
    <S.Wrapper>
      <Tab initialValue="announsment" onChangeActiveTab={setActiveTab}>
        <S.TabHeadersWrapper>
          <S.TabHeader value="announsment" active={activeTab === 'announsment'}>
            <S.Text>анонсы</S.Text>
          </S.TabHeader>
        </S.TabHeadersWrapper>

        <TabContent value="announsment">
          <AnnoucementsContainer component={Announcement} />
        </TabContent>
      </Tab>
    </S.Wrapper>
  );
};
