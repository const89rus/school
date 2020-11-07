import React from 'react';

import * as S from './styled';

interface Props {
  date: string;
  time: string;
  heading: string;
  description: string;
}

export const Event: React.FC<Props> = ({ date, time, heading, description }) => {
  return (
    <S.EventWrapper>
      <S.Date>{date}</S.Date>
      <S.Time>{time}</S.Time>
      <S.Event>
        <S.Heading>{heading}</S.Heading>
        <S.Description>{description}</S.Description>
      </S.Event>
    </S.EventWrapper>
  );
};
