import React from 'react';

import { ReactComponent as Garbage } from 'assets/svg/garbage.svg';
import { ReactComponent as Check } from 'assets/svg/check.svg';

import * as S from './styled';

interface Props {
  date: string;
  time: string;
  heading: string;
  description?: string;
}

export const EditEvent: React.FC<Props> = ({ date, time, heading, description }) => {
  return (
    <S.EventWrapper>
      <S.Date placeholder="Дата" defaultValue={date}></S.Date>
      <S.Time placeholder="Время" defaultValue={time}></S.Time>
      <S.Event>
        <S.Heading placeholder="Название" defaultValue={heading}></S.Heading>
        <S.Description placeholder="Описание (если потребуется)" defaultValue={description}></S.Description>
      </S.Event>
      <Check />
      <Garbage />
    </S.EventWrapper>
  );
};
