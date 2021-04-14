import React from 'react';

import { ReactComponent as Garbage } from 'assets/svg/garbage.svg';
import { ReactComponent as Check } from 'assets/svg/check.svg';

import * as S from './styled';

interface Props {
  id?: any;
  defaultDate: string;
  defaultTime: string;
  defaultHeading: string;
  defaultDescription: string;
  name?: string;
  check?: any;
  garbage?: any;
}

export const EditEvent: React.FC<Props> = ({
  name,
  id,
  defaultDate,
  defaultTime,
  defaultHeading,
  defaultDescription,
  check,
  garbage,
}) => {
  return (
    <S.EventWrapper name={name} id={id}>
      <S.Date placeholder="Дата" name="date" defaultValue={defaultDate} />
      <S.Time placeholder="Время" name="time" defaultValue={defaultTime} />
      <S.Event>
        <S.Heading placeholder="Название" name="heading" defaultValue={defaultHeading} />
        <S.Description placeholder="Описание (если потребуется)" name="description" defaultValue={defaultDescription} />
      </S.Event>
      <S.IconButton>
        <Check onClick={check} />
      </S.IconButton>
      <S.IconButton>
        <Garbage onClick={garbage} />
      </S.IconButton>
    </S.EventWrapper>
  );
};
