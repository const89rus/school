import React from 'react';

import * as S from './styled';

interface Props {
  headline: string;
  link: string;
}

export const Post: React.FC<Props> = ({ headline, link, children }) => {
  return (
    <S.PostWrapper>
      <S.Topic>{headline}</S.Topic>
      <S.Fragment>
        {children}
        <S.Link href={link}>Продлолжение в источнике...</S.Link>
      </S.Fragment>
    </S.PostWrapper>
  );
};
