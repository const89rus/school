import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { IMediaComponent, MediaFields } from 'domain/admin/interfaces';

//import { EditMassMedia } from 'view/common';

import { ReactComponent as Garbage } from 'assets/svg/garbage.svg';
import { ReactComponent as Check } from 'assets/svg/check.svg';

import * as S from './styled';

/*const media = [
  {
    id: '1',
    headingVideo: '213',
    linkVideo: '123',
    headingArticle: '2143',
    linkArticle: 'fdgdfg',
    fragment: 'dfg',
  },
  {
    id: '2',
    headingVideo: '',
    linkVideo: '',
    headingArticle: '',
    linkArticle: '',
    fragment: '',
  },
]; */

export const Media: React.FC<IMediaComponent> = ({ onUpdate, list }) => {
  const { handleSubmit, errors } = useForm<MediaFields>({
    mode: 'onBlur',
    defaultValues: {
      headingVideo: list.headingVideo,
      linkVideo: list.linkVideo,
      headingArticle: list.headingArticle,
      linkArticle: list.linkArticle,
      fragment: list.fragment,
    },
  });

  const media = useEffect(() => {
    <S.MMWrapper>
      <S.Input placeholder="Название видео" name="headingVideo"></S.Input>
      <S.Input placeholder="Ссылка на видео" name="linkVideo"></S.Input>
      <S.Input placeholder="Название статьи" name="headingArticle"></S.Input>
      <S.Input placeholder="Ссылка на статью" name="linkArticle"></S.Input>
      <S.Input placeholder="Краткое содержание статьи" name="fragment"></S.Input>
      <Check />
      <Garbage onClick={handleSubmit(onUpdate)} />
    </S.MMWrapper>;
  });
  return (
    <S.Wrapper id="media">
      <S.Add>Добавить</S.Add>
      {media}
    </S.Wrapper>
  );
};
