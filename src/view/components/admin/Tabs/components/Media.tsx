import React from 'react';

import { EditMassMedia } from 'view/common';

import * as S from './styled';

const media = [
  {
    id: '1',
    headingVideo: '213',
    linkVideo: '123',
    headingArticle: '2143',
    fragment: 'dfg',
    linkArticle: 'fdgdfg',
  },
  {
    id: '2',
    headingVideo: '',
    linkVideo: '',
    headingArticle: '',
    fragment: '',
    linkArticle: '',
  },
];

export const Media: React.FC = () => {
  return (
    <S.Wrapper id="media">
      <S.Add>Добавить</S.Add>
      {media.map((item) => (
        <EditMassMedia
          key={item.id}
          headingVideo={item.headingVideo}
          linkVideo={item.linkVideo}
          headingArticle={item.headingArticle}
          fragment={item.fragment}
          linkArticle={item.linkArticle}
        />
      ))}
    </S.Wrapper>
  );
};
