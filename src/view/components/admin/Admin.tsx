import React from 'react';

import { Tabs } from './Tabs/Tabs';

import * as S from './styled';

export const Admin: React.FC = () => {
  return (
    <S.Wrapper>
      <Tabs />
    </S.Wrapper>
  );
};
