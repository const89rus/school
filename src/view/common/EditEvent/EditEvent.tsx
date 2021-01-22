import React from 'react';
/*import { useForm } from 'react-hook-form';

import { ReactComponent as Garbage } from 'assets/svg/garbage.svg';
import { ReactComponent as Check } from 'assets/svg/check.svg';

import { IAnnouncementComponent, AnnouncementFields } from 'domain/admin/interfaces';

import * as S from './styled';

export const EditEvent: React.FC<IAnnouncementComponent> = ({ onUpdate, list }) => {
  const { handleSubmit, errors } = useForm<AnnouncementFields>({
    mode: 'onBlur',
    defaultValues: {
      date: list.date,
      time: list.time,
      heading: list.heading,
      description: list.description,
    },
  });
  return (
    <S.EventWrapper>
      <S.Date placeholder="Дата" name="date"></S.Date>
      <S.Time placeholder="Время" name="time"></S.Time>
      <S.Event>
        <S.Heading placeholder="Название" name="heading"></S.Heading>
        <S.Description placeholder="Описание (если потребуется)" name="description"></S.Description>
      </S.Event>
      <Check />
      <Garbage onClick={handleSubmit(onUpdate)} />
    </S.EventWrapper>
  );
};
*/