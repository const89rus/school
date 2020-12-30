import React from 'react';

import * as S from './styled';

interface Props {
  linkVideo?: string;
  fragment?: string;
  headingVideo?: string;
  linkArticle?: string;
  headingArticle?: string;
}

export const EditMassMedia: React.FC<Props> = ({
  children,
  linkVideo,
  headingVideo,
  headingArticle,
  linkArticle,
  fragment,
}) => {
  return (
    <S.MMWrapper>
      <S.Input placeholder="Название видео" defaultValue={headingVideo}></S.Input>
      <S.Input placeholder="Ссылка на видео" defaultValue={linkVideo}></S.Input>
      <S.Input placeholder="Название статьи" defaultValue={headingArticle}></S.Input>
      <S.Input placeholder="Краткое содержание статьи" defaultValue={fragment}></S.Input>
      <S.Input placeholder="Ссылка на статью" defaultValue={linkArticle}></S.Input>
      {children}
    </S.MMWrapper>
  );
};
