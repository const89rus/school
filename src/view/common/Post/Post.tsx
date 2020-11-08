import React from 'react';

import * as S from './styled';

interface Props {
  headline: string;
  post: string;
}

export const Post: React.FC<Props> = ({ post, headline }) => {
  return (
    <S.PostWrapper>
      <S.Topic>{headline}</S.Topic>
      <S.Fragment>{post}</S.Fragment>
    </S.PostWrapper>
  );
};
